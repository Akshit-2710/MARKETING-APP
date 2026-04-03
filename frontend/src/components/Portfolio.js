import { useState } from "react";
import { PORTFOLIO } from "@/config/siteConfig";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const [headRef, headVisible] = useScrollReveal(0.2);
  const [gridRef, gridVisible, getChildDelay] = useStaggerReveal(0.1);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "META Ads", "Google Ads", "Website Designing", "SEO"];
  
  const filteredProjects = filter === "All" 
    ? PORTFOLIO.projects 
    : PORTFOLIO.projects.filter(p => p.category === filter);

  return (
    <section
      id="work"
      data-testid="portfolio-section"
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2
          ref={headRef}
          data-testid="portfolio-heading"
          className={`font-heading text-3xl md:text-4xl font-bold text-[#1A3C8F] text-center mb-10 tracking-tight transition-all duration-700 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {PORTFOLIO.heading}
        </h2>

        {/* Category Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-16 transition-all duration-700 delay-200 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat 
                  ? "bg-[#1A3C8F] text-white shadow-md scale-105" 
                  : "bg-[#FDE8EE] text-[#1A3C8F] hover:bg-[#F8C8D4] hover:scale-105"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[400px]">
            {filteredProjects.map((project, i) => (
              <div
                key={i}
                data-testid={`portfolio-card-${i}`}
                className="portfolio-card group relative rounded-2xl overflow-hidden bg-[#FDE8EE] aspect-[4/3] cursor-pointer"
                style={getChildDelay(i)}
              >
                {/* Image or placeholder */}
                {project.image && !project.image.includes("[ADD") ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#F8C8D4] to-[#FDE8EE] flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                    <span className="text-[#1A3C8F]/30 text-sm font-medium">{project.image}</span>
                  </div>
                )}
  
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#0D2561]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center text-white p-6">
                  <div className="overlay-content text-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#F8C8D4] mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="font-heading text-xl font-bold">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70">{project.result}</p>
                  </div>
                  <div className="overlay-icon mt-4 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[300px] w-full bg-gradient-to-b from-[#FDE8EE] to-white rounded-3xl border border-[#F8C8D4]/50 py-16 px-6 text-center shadow-sm">
            <h3 className="font-heading text-3xl md:text-5xl font-extrabold text-[#1A3C8F] italic tracking-tight opacity-90 drop-shadow-sm">
              " You can be the first. "
            </h3>
            <p className="mt-6 text-[#1A3C8F]/60 font-medium">
              We have the strategy ready. Claim your spot and dominate this space.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
