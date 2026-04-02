import { TESTIMONIALS } from "@/config/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function Testimonials() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="py-20 lg:py-32 bg-white"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 md:px-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2
          data-testid="testimonials-heading"
          className="font-heading text-3xl md:text-4xl font-bold text-[#1A3C8F] text-center mb-16 tracking-tight"
        >
          {TESTIMONIALS.heading}
        </h2>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            data-testid="testimonials-carousel"
          >
            <CarouselContent className="-ml-6">
              {TESTIMONIALS.items.map((item, i) => (
                <CarouselItem key={i} className="pl-6 md:basis-1/2">
                  <div
                    data-testid={`testimonial-card-${i}`}
                    className="bg-[#FDE8EE] rounded-2xl p-8 h-full flex flex-col"
                  >
                    <Quote size={28} className="text-[#1A3C8F]/20 mb-4 shrink-0" />
                    <p className="text-sm text-[#333333] leading-relaxed flex-1 italic">
                      "{item.text}"
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#F8C8D4] flex items-center justify-center text-[#1A3C8F] font-bold text-sm font-heading shrink-0 overflow-hidden">
                        {item.avatar && !item.avatar.includes("[ADD") ? (
                          <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                        ) : (
                          item.name.charAt(0) === "[" ? "?" : item.name.charAt(0)
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#1A3C8F]">{item.name}</div>
                        <div className="text-xs text-[#333333]/60">
                          {item.designation}, {item.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              data-testid="testimonial-prev"
              className="border-[#1A3C8F]/20 text-[#1A3C8F] hover:bg-[#1A3C8F] hover:text-white"
            />
            <CarouselNext
              data-testid="testimonial-next"
              className="border-[#1A3C8F]/20 text-[#1A3C8F] hover:bg-[#1A3C8F] hover:text-white"
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
