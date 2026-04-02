import { SERVICES } from "@/config/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import * as LucideIcons from "lucide-react";

function ServiceIcon({ name }) {
  const Icon = LucideIcons[name] || LucideIcons.Star;
  return <Icon size={24} />;
}

export default function Services() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-20 lg:py-32 bg-white"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 md:px-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.items.map((service, i) => (
            <div
              key={i}
              data-testid={`service-card-${i}`}
              className="group bg-[#FDE8EE] rounded-2xl p-8 border border-[#0D2561]/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#F8C8D4]/40"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#F8C8D4] flex items-center justify-center text-[#1A3C8F] mb-5 group-hover:bg-[#1A3C8F] group-hover:text-white transition-colors duration-300">
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
