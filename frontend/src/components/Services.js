import { SERVICES } from "@/config/siteConfig";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";
import * as LucideIcons from "lucide-react";
import { ArrowUpRight } from "lucide-react";

function ServiceIcon({ name }) {
  const Icon = LucideIcons[name] || LucideIcons.Star;
  return <Icon size={28} strokeWidth={1.8} />;
}

export default function Services() {
  const [headRef, headVisible] = useScrollReveal(0.2);
  const [gridRef, gridVisible, getChildDelay] = useStaggerReveal(0.08);

  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
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
          <p className="mt-4 text-sm md:text-base text-[#333333]/70 max-w-xl mx-auto">
            {SERVICES.subtitle}
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.items.map((service, i) => (
            <div
              key={i}
              data-testid={`service-card-${i}`}
              className="group relative bg-[#FDE8EE] rounded-2xl p-8 lg:p-10 border border-[#0D2561]/5 card-hover overflow-hidden"
              style={getChildDelay(i)}
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#F8C8D4]/50 rounded-bl-[60px] -mr-1 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon + Title row */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="icon-animate w-14 h-14 rounded-2xl bg-[#F8C8D4] flex items-center justify-center text-[#1A3C8F] group-hover:bg-[#1A3C8F] group-hover:text-white transition-all duration-300 shrink-0">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <h3 className="font-heading text-xl lg:text-2xl font-bold text-[#1A3C8F] tracking-tight">
                    {service.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="ml-auto text-[#1A3C8F]/20 group-hover:text-[#1A3C8F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0"
                  />
                </div>

                {/* Description */}
                <p className="text-sm md:text-[15px] text-[#333333]/80 leading-[1.7]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
