import { useState, useEffect, useCallback } from "react";
import { HERO } from "@/config/siteConfig";
import { ArrowRight, Play } from "lucide-react";

function RotatingBadge({ words }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="relative inline-flex items-center justify-center mx-2 md:mx-3">
      <span className="absolute inset-0 rounded-full bg-[#1A3C8F] blur-lg opacity-20 animate-pulse" />
      <span
        className="relative inline-block px-5 md:px-7 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-[#1A3C8F] to-[#0D2561] text-white text-base sm:text-lg md:text-2xl font-bold font-heading shadow-lg shadow-[#1A3C8F]/30 overflow-hidden"
        style={{ minWidth: "180px" }}
      >
        <span
          key={index}
          className="inline-block animate-badge-swap"
        >
          {words[index]}
        </span>
      </span>
    </span>
  );
}

export default function Hero({ showContent }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!showContent) return;
    const timers = [
      setTimeout(() => setStep(1), 100),
      setTimeout(() => setStep(2), 400),
      setTimeout(() => setStep(3), 700),
      setTimeout(() => setStep(4), 1000),
      setTimeout(() => setStep(5), 1300),
    ];
    return () => timers.forEach(clearTimeout);
  }, [showContent]);

  const scrollTo = useCallback((selector) => (e) => {
    e.preventDefault();
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const lineStyle = (n) => ({
    opacity: step >= n ? 1 : 0,
    transform: step >= n ? "translateY(0)" : "translateY(50px)",
    transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
  });

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #F8C8D4 0%, #FDE8EE 40%, #F8C8D4 80%, #FDE8EE 100%)", backgroundSize: "200% 200%" }}
    >
      {/* Radial glow behind text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(26,60,143,0.06) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#1A3C8F]/[0.03] animate-float-slow" />
        <div className="absolute top-1/4 -left-20 w-56 h-56 rounded-full bg-[#0D2561]/[0.04] animate-float-medium" />
        <div className="absolute bottom-16 right-[15%] w-40 h-40 rounded-full bg-white/25 animate-float-fast" />
        <div className="absolute top-[15%] left-1/3 w-20 h-20 rounded-full bg-[#1A3C8F]/[0.05] animate-float-medium" />
        <div className="absolute bottom-1/3 left-[8%] w-14 h-14 rounded-full bg-[#F8C8D4]/60 animate-float-slow" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Line 1: Headline Part 1 */}
        <div style={lineStyle(1)}>
          <h1
            data-testid="hero-headline"
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-[#1A3C8F] leading-[1.1] tracking-tight"
          >
            {HERO.headlinePart1}
          </h1>
        </div>

        {/* Line 2: Rotating badge */}
        <div style={lineStyle(2)} className="mt-3 md:mt-4">
          <RotatingBadge words={HERO.rotatingWords} />
        </div>

        {/* Line 3: Headline Part 2 */}
        <div style={lineStyle(3)} className="mt-3 md:mt-4">
          <h2
            data-testid="hero-subheadline"
            className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold text-[#0D2561] leading-[1.1] tracking-tight"
          >
            {HERO.headlinePart2}
          </h2>
        </div>

        {/* Line 4: Description + CTAs */}
        <div style={lineStyle(4)} className="mt-8">
          <p
            data-testid="hero-description"
            className="text-sm md:text-base text-[#333333]/80 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            {HERO.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              data-testid="hero-primary-cta"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0D2561] text-white font-semibold text-sm btn-magnetic hover:bg-[#1A3C8F] hover:shadow-xl hover:shadow-[#1A3C8F]/25 transition-all duration-300"
              onClick={scrollTo("#contact")}
            >
              {HERO.ctaPrimary}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              data-testid="hero-secondary-cta"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm text-[#1A3C8F] font-semibold text-sm border-2 border-[#1A3C8F]/15 btn-magnetic hover:border-[#1A3C8F]/40 hover:shadow-lg transition-all duration-300"
              onClick={scrollTo("#work")}
            >
              <Play size={14} className="transition-transform duration-300 group-hover:scale-125" />
              {HERO.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Line 5: Trust Badges */}
        <div style={lineStyle(5)} className="mt-14">
          <div
            data-testid="hero-trust-badges"
            className="flex flex-wrap items-center justify-center gap-3 md:gap-5"
          >
            {HERO.trustBadges.map((badge, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-[#1A3C8F]/10 text-xs md:text-sm font-semibold text-[#0D2561]/70 tracking-wide"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A3C8F]/40" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
