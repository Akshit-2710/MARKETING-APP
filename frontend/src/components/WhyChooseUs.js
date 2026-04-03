import { WHY_CHOOSE_US } from "@/config/siteConfig";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";
import * as LucideIcons from "lucide-react";

function FeatureIcon({ name }) {
  const Icon = LucideIcons[name] || LucideIcons.Star;
  return <Icon size={28} />;
}

export default function WhyChooseUs() {
  const [headRef, headVisible] = useScrollReveal(0.2);
  const [gridRef, gridVisible, getChildDelay] = useStaggerReveal(0.1);

  return (
    <section
      data-testid="why-choose-us-section"
      className="py-20 lg:py-32 bg-[#0A163B] relative overflow-hidden"
    >
      {/* Sleek Dark Mode Glow Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#1A3C8F]/20 blur-[120px] mix-blend-screen animate-float-slow" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#F8C8D4]/10 blur-[100px] animate-float-medium" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F8C8D4]/60 uppercase mb-3 block text-center">Your Last Agency</span>
        <h2
          ref={headRef}
          data-testid="why-choose-heading"
          className={`font-display text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#F8C8D4]/80 text-center mb-16 tracking-tight transition-all duration-700 leading-[1.1] ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {WHY_CHOOSE_US.heading.toUpperCase()}
        </h2>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {WHY_CHOOSE_US.features.map((feature, i) => (
            <div
              key={i}
              data-testid={`feature-block-${i}`}
              className="group bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/[0.08] card-hover hover:border-[#1A3C8F]/50 transition-all duration-500 overflow-hidden relative"
              style={getChildDelay(i)}
            >
              {/* Subtle hover gradient burst inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A3C8F]/0 to-[#F8C8D4]/0 group-hover:from-[#1A3C8F]/10 group-hover:to-[#F8C8D4]/5 transition-all duration-500 pointer-events-none" />

              <div className="icon-animate relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F8C8D4] to-[#FDE8EE] flex items-center justify-center text-[#0D2561] mb-6 shadow-[0_0_20px_rgba(248,200,212,0.2)]">
                <FeatureIcon name={feature.icon} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-white/50 leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
