import { useEffect, useState, useRef } from "react";
import { RESULTS, TESTIMONIALS } from "@/config/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Animated counter removed as stats are replaced by reviews

export default function Results() {
  const [ref, isVisible] = useScrollReveal(0.2);

  return (
    <section
      id="results"
      data-testid="results-section"
      className="py-20 lg:py-32 bg-[#0D2561] relative overflow-hidden"
    >
      {/* Subtle bg pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-10 left-[10%] w-40 h-40 rounded-full border border-white" />
        <div className="absolute bottom-10 right-[15%] w-60 h-60 rounded-full border border-white" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full border border-white -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        <h2
          data-testid="results-heading"
          className={`font-heading text-3xl md:text-4xl font-bold text-white text-center mb-16 tracking-tight transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {RESULTS.heading}
        </h2>

        {/* Client Quotes with IG Profile Pictures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.items.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${300 + (i * 150)}ms`,
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="shrink-0" title={`Visit ${item.name} on Instagram`}>
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#F8C8D4] hover:scale-110 transition-transform duration-300"
                      onError={(e) => { e.target.onerror = null; e.target.src = "/images/lords_furnitures.png" }}
                    />
                  </a>
                ) : (
                  <img src={item.avatar} alt={item.name} className="w-16 h-16 rounded-full object-cover border-2 border-[#F8C8D4]" />
                )}
                <div>
                  <h3 className="text-[#F8C8D4] font-bold text-lg font-heading">{item.name}</h3>
                  <p className="text-white/60 text-sm">{item.designation}, {item.company}</p>
                </div>
              </div>
              <p className="text-white/90 italic leading-relaxed text-sm md:text-base">"{item.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
