import { useState, useEffect, useCallback } from "react";
import { HERO } from "@/config/siteConfig";
import { ArrowRight, Play } from "lucide-react";

function RotatingBadge({ words }) {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setAnimating(false);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="relative inline-flex items-center justify-center">
      {/* Glow pulse behind badge */}
      <span className="absolute inset-0 rounded-full bg-[#1A3C8F] blur-2xl opacity-15 scale-110 animate-pulse" />
      <span
        className="relative inline-flex items-center justify-center px-6 md:px-10 py-2 md:py-3 rounded-full bg-gradient-to-r from-[#1A3C8F] via-[#0D2561] to-[#1A3C8F] text-white font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold shadow-2xl shadow-[#1A3C8F]/30 overflow-hidden"
        style={{ minWidth: "220px", backgroundSize: "200% 100%", animation: "shimmerBg 3s ease-in-out infinite" }}
      >
        <span
          key={index}
          className={`inline-block transition-all duration-400 ${
            animating
              ? "opacity-0 translate-y-4 scale-95"
              : "opacity-100 translate-y-0 scale-100"
          }`}
          style={{ transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
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
      setTimeout(() => setStep(1), 200),
      setTimeout(() => setStep(2), 600),
      setTimeout(() => setStep(3), 1000),
      setTimeout(() => setStep(4), 1500),
      setTimeout(() => setStep(5), 2000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [showContent]);

  const scrollTo = useCallback((selector) => (e) => {
    e.preventDefault();
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const lineStyle = (n) => ({
    opacity: step >= n ? 1 : 0,
    transform: step >= n ? "translateY(0)" : "translateY(60px)",
    filter: step >= n ? "blur(0px)" : "blur(8px)",
    transition: "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), filter 0.9s ease-out",
  });

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-[80px] pb-8"
      style={{ background: "linear-gradient(160deg, #F8C8D4 0%, #FDE8EE 40%, #F8C8D4 80%, #FDE8EE 100%)" }}
    >
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(26,60,143,0.07) 0%, transparent 60%)",
          filter: "blur(50px)",
        }}
      />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-80 h-80 rounded-full bg-[#1A3C8F]/[0.03] animate-float-slow" />
        <div className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-[#0D2561]/[0.04] animate-float-medium" />
        <div className="absolute bottom-16 right-[15%] w-44 h-44 rounded-full bg-white/20 animate-float-fast" />
        <div className="absolute top-[12%] left-[30%] w-24 h-24 rounded-full bg-[#1A3C8F]/[0.04] animate-float-medium" />
        <div className="absolute bottom-[25%] left-[6%] w-16 h-16 rounded-full bg-[#F8C8D4]/50 animate-float-slow" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
        {/* Line 1: Headline Part 1 — display font, massive */}
        <div style={lineStyle(1)}>
          <h1
            data-testid="hero-headline"
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.375rem] font-extrabold text-[#1A3C8F] leading-[0.95] tracking-[-0.03em]"
          >
            {HERO.headlinePart1}
          </h1>
        </div>

        {/* Line 2: "We Build" + Rotating Power Word */}
        <div style={lineStyle(2)} className="mt-4 md:mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <span className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold text-[#0D2561]/40 leading-[0.95]">
            We Build
          </span>
          <RotatingBadge words={HERO.rotatingWords} />
        </div>

        {/* Line 3: Headline Part 2 */}
        <div style={lineStyle(3)} className="mt-4 md:mt-5">
          <h2
            data-testid="hero-subheadline"
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold text-[#0D2561] leading-[0.95] tracking-[-0.03em]"
          >
            {HERO.headlinePart2}
          </h2>
        </div>

        {/* Line 4: Description + CTAs */}
        <div style={lineStyle(4)} className="mt-10 md:mt-12">
          <p
            data-testid="hero-description"
            className="text-sm md:text-base lg:text-lg text-[#333333]/75 max-w-2xl mx-auto leading-relaxed mb-10 font-light"
          >
            {HERO.description}
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 text-[0.65rem] md:text-xs font-bold tracking-[0.2em] text-[#1A3C8F]/60 uppercase">
            <span>META Ads</span>
            <span className="w-1 h-1 rounded-full bg-[#1A3C8F]/30 self-center" />
            <span>Google Ads</span>
            <span className="w-1 h-1 rounded-full bg-[#1A3C8F]/30 self-center" />
            <span>SEO</span>
            <span className="w-1 h-1 rounded-full bg-[#1A3C8F]/30 self-center" />
            <span>Web Design</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              data-testid="hero-primary-cta"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#0D2561] text-white font-semibold text-sm md:text-base btn-magnetic hover:bg-[#1A3C8F] hover:shadow-2xl hover:shadow-[#1A3C8F]/30 transition-all duration-300"
              onClick={scrollTo("#contact")}
            >
              {HERO.ctaPrimary}
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
            <a
              href="#work"
              data-testid="hero-secondary-cta"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white/70 backdrop-blur-sm text-[#1A3C8F] font-semibold text-sm md:text-base border-2 border-[#1A3C8F]/12 btn-magnetic hover:border-[#1A3C8F]/35 hover:bg-white hover:shadow-xl transition-all duration-300"
              onClick={scrollTo("#work")}
            >
              <Play size={15} className="transition-transform duration-300 group-hover:scale-125" />
              {HERO.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Line 5: Trust Badges */}
        <div style={lineStyle(5)} className="mt-14 md:mt-16">
          <div
            data-testid="hero-trust-badges"
            className="flex flex-wrap items-center justify-center gap-3 md:gap-5"
          >
            {HERO.trustBadges.map((badge, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/50 backdrop-blur-sm border border-[#1A3C8F]/8 text-xs md:text-sm font-semibold text-[#0D2561]/65 tracking-wide"
              >
                <span className="w-2 h-2 rounded-full bg-[#1A3C8F]/30" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
