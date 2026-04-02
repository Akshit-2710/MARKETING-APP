import { PORTFOLIO } from "@/config/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section
      id="work"
      data-testid="portfolio-section"
      className="py-20 lg:py-32 bg-white"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 md:px-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2
          data-testid="portfolio-heading"
          className="font-heading text-3xl md:text-4xl font-bold text-[#1A3C8F] text-center mb-16 tracking-tight"
        >
          {PORTFOLIO.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PORTFOLIO.projects.map((project, i) => (
            <div
              key={i}
              data-testid={`portfolio-card-${i}`}
              className="group relative rounded-2xl overflow-hidden bg-[#FDE8EE] aspect-[4/3] cursor-pointer"
            >
              {/* Image or placeholder */}
              {project.image && !project.image.includes("[ADD") ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#F8C8D4] to-[#FDE8EE] flex items-center justify-center">
                  <span className="text-[#1A3C8F]/30 text-sm font-medium">{project.image}</span>
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#0D2561]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#F8C8D4] mb-2">
                  {project.category}
                </span>
                <h3 className="font-heading text-xl font-bold text-center">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">{project.result}</p>
                <div className="mt-4 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                  <ExternalLink size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
