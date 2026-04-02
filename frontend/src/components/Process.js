import { PROCESS } from "@/config/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Process() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section
      id="process"
      data-testid="process-section"
      className="py-20 lg:py-32 bg-[#FDE8EE]"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 md:px-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2
          data-testid="process-heading"
          className="font-heading text-3xl md:text-4xl font-bold text-[#1A3C8F] text-center mb-16 tracking-tight"
        >
          {PROCESS.heading}
        </h2>

        {/* Desktop timeline */}
        <div className="hidden md:flex items-start justify-between relative">
          {/* Connecting line */}
          <div className="absolute top-6 left-[10%] right-[10%] h-[2px] bg-[#1A3C8F]/20" />

          {PROCESS.steps.map((step, i) => (
            <div
              key={i}
              data-testid={`process-step-${i}`}
              className="relative flex flex-col items-center text-center flex-1 px-4"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-[#1A3C8F] text-white flex items-center justify-center text-lg font-bold font-heading relative z-10 shadow-lg shadow-[#1A3C8F]/20">
                {i + 1}
              </div>
              <h3 className="mt-6 font-heading text-lg font-semibold text-[#1A3C8F]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[#333333] leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden flex flex-col gap-8">
          {PROCESS.steps.map((step, i) => (
            <div
              key={i}
              data-testid={`process-step-mobile-${i}`}
              className="flex items-start gap-5"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#1A3C8F] text-white flex items-center justify-center text-sm font-bold font-heading shrink-0">
                  {i + 1}
                </div>
                {i < PROCESS.steps.length - 1 && (
                  <div className="w-[2px] h-full min-h-[40px] bg-[#1A3C8F]/20 mt-2" />
                )}
              </div>
              <div className="pb-4">
                <h3 className="font-heading text-base font-semibold text-[#1A3C8F]">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-[#333333] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
