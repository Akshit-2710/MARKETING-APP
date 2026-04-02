import { useState, useEffect } from "react";
import { HERO } from "@/config/siteConfig";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden gradient-shimmer"
      style={{ background: "linear-gradient(135deg, #F8C8D4 0%, #FDE8EE 30%, #F8C8D4 60%, #FDE8EE 100%)", backgroundSize: "200% 200%" }}
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#1A3C8F]/[0.04] animate-float-slow" />
        <div className="absolute top-1/3 -left-16 w-56 h-56 rounded-full bg-[#0D2561]/[0.04] animate-float-medium" />
        <div className="absolute bottom-20 right-1/4 w-36 h-36 rounded-full bg-white/30 animate-float-fast" />
        <div className="absolute top-20 left-1/3 w-24 h-24 rounded-full bg-[#1A3C8F]/[0.06] animate-float-medium" />
        <div className="absolute bottom-1/3 left-[10%] w-16 h-16 rounded-full bg-[#0D2561]/[0.04] animate-float-slow" />
      </div>

      <div className={`relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center ${loaded ? 'hero-animate' : ''}`}>
        <h1
          data-testid="hero-headline"
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A3C8F] leading-tight tracking-tight"
        >
          {HERO.headline}
        </h1>

        <h2
          data-testid="hero-subheadline"
          className="mt-4 text-base md:text-lg text-[#0D2561]/80 font-medium"
        >
          {HERO.subheadline}
        </h2>

        <p
          data-testid="hero-description"
          className="mt-6 text-sm md:text-base text-[#333333] max-w-2xl mx-auto leading-relaxed"
        >
          {HERO.description}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            data-testid="hero-primary-cta"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0D2561] text-white font-semibold text-sm btn-magnetic hover:bg-[#1A3C8F] hover:shadow-xl hover:shadow-[#1A3C8F]/20"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {HERO.ctaPrimary}
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#work"
            data-testid="hero-secondary-cta"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#1A3C8F] font-semibold text-sm border-2 border-[#1A3C8F]/20 btn-magnetic hover:border-[#1A3C8F] hover:shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Play size={14} className="transition-transform duration-300 group-hover:scale-110" />
            {HERO.ctaSecondary}
          </a>
        </div>

        {/* Trust Badges */}
        <div
          data-testid="hero-trust-badges"
          className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {HERO.trustBadges.map((badge, i) => (
            <span
              key={i}
              className="text-xs md:text-sm font-semibold text-[#0D2561]/60 tracking-wide uppercase"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
