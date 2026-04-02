import { HERO } from "@/config/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F8C8D4 0%, #FDE8EE 50%, #F8C8D4 100%)" }}
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#1A3C8F]/5 animate-float-slow" />
        <div className="absolute top-1/3 -left-16 w-48 h-48 rounded-full bg-[#0D2561]/5 animate-float-medium" />
        <div className="absolute bottom-20 right-1/4 w-32 h-32 rounded-full bg-white/30 animate-float-fast" />
        <div className="absolute top-20 left-1/3 w-20 h-20 rounded-full bg-[#1A3C8F]/8 animate-float-medium" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0D2561] text-white font-semibold text-sm hover:bg-[#1A3C8F] transition-all duration-300 hover:shadow-lg hover:shadow-[#1A3C8F]/20"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {HERO.ctaPrimary}
            <ArrowRight size={16} />
          </a>
          <a
            href="#work"
            data-testid="hero-secondary-cta"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#1A3C8F] font-semibold text-sm border-2 border-[#1A3C8F]/20 hover:border-[#1A3C8F] transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Play size={14} />
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
