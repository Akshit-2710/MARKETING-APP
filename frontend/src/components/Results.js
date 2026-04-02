import { useEffect, useState, useRef } from "react";
import { RESULTS } from "@/config/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function AnimatedCounter({ target, isVisible, index }) {
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(target.replace(/[^0-9]/g, ""), 10);
  const hasNumber = !isNaN(numericTarget) && numericTarget > 0;
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isVisible || !hasNumber || hasRun.current) return;
    hasRun.current = true;
    const delay = index * 200;
    const timeout = setTimeout(() => {
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
    }, delay);
    return () => clearTimeout(timeout);
  }, [isVisible, numericTarget, hasNumber, index]);

  if (!hasNumber) return <span>{target}</span>;
  return <span>{count.toLocaleString()}</span>;
}

export default function Results() {
  const [ref, isVisible] = useScrollReveal(0.2);

  return (
    <section
      id="results"
      data-testid="results-section"
      className="py-20 lg:py-32 bg-[#0D2561] relative overflow-hidden"
    >
      {/* Subtle bg pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-10 left-[10%] w-40 h-40 rounded-full border border-white" />
        <div className="absolute bottom-10 right-[15%] w-60 h-60 rounded-full border border-white" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full border border-white -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        <h2
          data-testid="results-heading"
          className={`font-heading text-3xl md:text-4xl font-bold text-white text-center mb-16 tracking-tight transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {RESULTS.heading}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {RESULTS.stats.map((stat, i) => (
            <div
              key={i}
              data-testid={`stat-box-${i}`}
              className="text-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 150}ms`,
              }}
            >
              <div className={`text-3xl md:text-5xl font-bold text-[#F8C8D4] font-heading tracking-tight ${isVisible ? 'counter-pulse visible' : ''}`}>
                <AnimatedCounter target={stat.number} isVisible={isVisible} index={i} />
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
