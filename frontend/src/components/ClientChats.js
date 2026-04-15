import { useState, useEffect, useCallback, useRef } from "react";
import { CLIENT_CHATS } from "@/config/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight, MessageCircle, Pause, Play } from "lucide-react";

export default function ClientChats() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStart = useRef(null);
  const [headRef, headVisible] = useScrollReveal(0.2);
  const total = CLIENT_CHATS.images.length;

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % total);
        setIsAnimating(false);
      }, 400);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPlaying, total]);

  const goTo = useCallback((index) => {
    if (isAnimating) return;
    setDirection(index > current ? 1 : -1);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setIsAnimating(false);
    }, 400);
  }, [current, isAnimating]);

  const goPrev = useCallback(() => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + total) % total);
      setIsAnimating(false);
    }, 400);
  }, [total, isAnimating]);

  const goNext = useCallback(() => {
    if (isAnimating) return;
    setDirection(1);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
      setIsAnimating(false);
    }, 400);
  }, [total, isAnimating]);

  // Touch/swipe support
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStart.current = null;
  };

  // Keyboard
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goPrev, goNext]);

  const slideStyle = {
    transform: isAnimating
      ? `translateX(${direction * -100}%) scale(0.9)`
      : "translateX(0) scale(1)",
    opacity: isAnimating ? 0 : 1,
    transition: isAnimating
      ? "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease"
      : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease",
  };

  return (
    <section
      id="services"
      data-testid="client-chats-section"
      className="py-16 lg:py-28"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #FDE8EE 30%, #FDE8EE 70%, #ffffff 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">

        {/* Header */}
        <div
          ref={headRef}
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-[#1A3C8F]/10 text-[#1A3C8F] text-xs font-semibold px-4 py-2 rounded-full mb-5 tracking-wider uppercase">
            <MessageCircle size={14} />
            Proof of Results
          </div>

          <h2
            data-testid="client-chats-heading"
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A3C8F] tracking-tight leading-tight"
          >
            {CLIENT_CHATS.heading}
          </h2>
          <p className="mt-4 text-sm md:text-base text-[#333333]/70 max-w-xl mx-auto leading-relaxed">
            {CLIENT_CHATS.subtitle}
          </p>
        </div>

        {/* Slideshow Container */}
        <div
          className={`relative transition-all duration-700 delay-200 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Phone-style frame */}
          <div className="relative max-w-sm mx-auto">
            {/* Decorative glow behind */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#1A3C8F]/10 via-[#F8C8D4]/40 to-[#1A3C8F]/10 rounded-[2.5rem] blur-2xl opacity-60" />

            {/* Phone frame */}
            <div
              className="relative bg-white rounded-[2rem] shadow-2xl shadow-[#1A3C8F]/15 overflow-hidden border border-[#E5E7EB]"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Status bar */}
              <div className="bg-[#1A3C8F] px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageCircle size={16} className="text-white/80" />
                  <span className="text-white text-xs font-semibold tracking-wide">
                    Client Chat {current + 1}/{total}
                  </span>
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                </div>
              </div>

              {/* Image area — full width, no cropping */}
              <div className="relative overflow-hidden" style={{ minHeight: "360px" }}>
                <div style={slideStyle}>
                  <img
                    src={CLIENT_CHATS.images[current]}
                    alt={`Client chat screenshot ${current + 1}`}
                    className="w-full h-auto block"
                    style={{ imageRendering: "auto" }}
                    draggable={false}
                  />
                </div>
              </div>

              {/* Bottom bar with controls */}
              <div className="bg-white border-t border-[#E5E7EB] px-4 py-3 flex items-center justify-between">
                {/* Prev */}
                <button
                  onClick={goPrev}
                  className="w-10 h-10 rounded-full bg-[#FDE8EE] hover:bg-[#F8C8D4] flex items-center justify-center text-[#1A3C8F] transition-all duration-200 active:scale-90"
                  aria-label="Previous"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Dots */}
                <div className="flex items-center gap-2">
                  {CLIENT_CHATS.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className="transition-all duration-300"
                      style={{
                        width: i === current ? "24px" : "8px",
                        height: "8px",
                        borderRadius: "4px",
                        backgroundColor: i === current ? "#1A3C8F" : "#F8C8D4",
                      }}
                    />
                  ))}
                </div>

                {/* Next */}
                <button
                  onClick={goNext}
                  className="w-10 h-10 rounded-full bg-[#FDE8EE] hover:bg-[#F8C8D4] flex items-center justify-center text-[#1A3C8F] transition-all duration-200 active:scale-90"
                  aria-label="Next"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Play/Pause toggle */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#1A3C8F]/15 text-[#1A3C8F] text-xs font-semibold hover:bg-[#FDE8EE] transition-all duration-200 shadow-sm"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              {isPlaying ? "Pause Slideshow" : "Play Slideshow"}
            </button>
          </div>

          {/* Swipe hint on mobile */}
          <p className="text-center text-xs text-[#333333]/40 mt-4 md:hidden">
            ← Swipe to navigate →
          </p>
        </div>
      </div>
    </section>
  );
}
