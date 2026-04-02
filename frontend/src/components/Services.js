import { SERVICES } from "@/config/siteConfig";
import { useStaggerReveal } from "@/hooks/useScrollReveal";
import * as LucideIcons from "lucide-react";

function ServiceIcon({ name }) {
  const Icon = LucideIcons[name] || LucideIcons.Star;
  return <Icon size={24} />;
}

export default function Services() {
  const [ref, isVisible, getChildDelay] = useStaggerReveal(0.1);
  const [headRef, headVisible] = require("@/hooks/useScrollReveal").useScrollReveal(0.2);

  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          ref={headRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            data-testid="services-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-[#1A3C8F] tracking-tight"
          >
            {SERVICES.heading}
          </h2>
          <p className="mt-4 text-sm md:text-base text-[#333333] max-w-xl mx-auto">
            {SERVICES.subtitle}
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.items.map((service, i) => (
            <div
              key={i}
              data-testid={`service-card-${i}`}
              className="group bg-[#FDE8EE] rounded-2xl p-8 border border-[#0D2561]/5 card-hover"
              style={getChildDelay(i)}
            >
              <div className="icon-animate w-12 h-12 rounded-xl bg-[#F8C8D4] flex items-center justify-center text-[#1A3C8F] mb-5 group-hover:bg-[#1A3C8F] group-hover:text-white transition-all duration-300">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-[#1A3C8F] mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-[#333333] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
