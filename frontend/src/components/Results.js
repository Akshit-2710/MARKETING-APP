import { useEffect, useState, useRef } from "react";
import { RESULTS } from "@/config/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function AnimatedCounter({ target, isVisible }) {
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(target.replace(/[^0-9]/g, ""), 10);
  const hasNumber = !isNaN(numericTarget) && numericTarget > 0;
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isVisible || !hasNumber || hasRun.current) return;
    hasRun.current = true;
    const duration = 2000;
    const steps = 60;
    const increment = numericTarget / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, numericTarget, hasNumber]);

  if (!hasNumber) return <span>{target}</span>;
  return <span>{count.toLocaleString()}</span>;
}

export default function Results() {
  const [ref, isVisible] = useScrollReveal(0.2);

  return (
    <section
      id="results"
      data-testid="results-section"
      className="py-20 lg:py-32 bg-[#0D2561]"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 md:px-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2
          data-testid="results-heading"
          className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-16 tracking-tight"
        >
          {RESULTS.heading}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {RESULTS.stats.map((stat, i) => (
            <div
              key={i}
              data-testid={`stat-box-${i}`}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-bold text-[#F8C8D4] font-heading tracking-tight">
                <AnimatedCounter target={stat.number} isVisible={isVisible} />
                {stat.suffix}
              </div>
              <div className="mt-3 text-sm md:text-base text-white/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
