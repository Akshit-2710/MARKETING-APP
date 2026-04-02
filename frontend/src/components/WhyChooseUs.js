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
      className="py-20 lg:py-32 bg-[#0D2561] relative overflow-hidden"
    >
      {/* Subtle bg decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full border border-white animate-float-slow" />
        <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full border border-white animate-float-medium" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <h2
          ref={headRef}
          data-testid="why-choose-heading"
          className={`font-heading text-3xl md:text-4xl font-bold text-white text-center mb-16 tracking-tight transition-all duration-700 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {WHY_CHOOSE_US.heading}
        </h2>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {WHY_CHOOSE_US.features.map((feature, i) => (
            <div
              key={i}
              data-testid={`feature-block-${i}`}
              className="group bg-[#1A3C8F] rounded-2xl p-8 border border-white/10 card-hover"
              style={getChildDelay(i)}
            >
              <div className="icon-animate w-12 h-12 rounded-xl bg-[#F8C8D4] flex items-center justify-center text-[#0D2561] mb-5 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#F8C8D4]/20">
                <FeatureIcon name={feature.icon} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
