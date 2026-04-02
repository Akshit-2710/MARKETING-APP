import { WHY_CHOOSE_US } from "@/config/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import * as LucideIcons from "lucide-react";

function FeatureIcon({ name }) {
  const Icon = LucideIcons[name] || LucideIcons.Star;
  return <Icon size={28} />;
}

export default function WhyChooseUs() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section
      data-testid="why-choose-us-section"
      className="py-20 lg:py-32 bg-[#0D2561]"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 md:px-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2
          data-testid="why-choose-heading"
          className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-16 tracking-tight"
        >
          {WHY_CHOOSE_US.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {WHY_CHOOSE_US.features.map((feature, i) => (
            <div
              key={i}
              data-testid={`feature-block-${i}`}
              className="bg-[#1A3C8F] rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F8C8D4] flex items-center justify-center text-[#0D2561] mb-5">
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
