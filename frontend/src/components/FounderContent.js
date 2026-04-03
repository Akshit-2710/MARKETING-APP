import { useState, useRef, useEffect } from "react";
import { FOUNDER_CONTENT, INFLUENCER_CONTENT } from "@/config/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight, VolumeX, Volume2 } from "lucide-react";

function VideoStack({ heading, subtext, label, videos }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);

  useEffect(() => {
    if (!videos) return;
    videos.forEach((_, i) => {
      const video = videoRefs.current[i];
      if (video) {
        if (i === currentIndex) {
          video.muted = isMuted;
          video.play().catch(e => console.log("Autoplay blocked:", e));
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentIndex, isMuted, videos]);

  if (!videos || videos.length === 0) return null;

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % videos.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="mb-10 text-center">
        <span className="text-[0.65rem] md:text-xs font-bold tracking-[0.2em] text-[#1A3C8F]/60 uppercase mb-3 block">
          {subtext}
        </span>
        <h2
          className="text-3xl md:text-4xl text-center tracking-wide transition-all duration-700 uppercase"
          style={{ fontFamily: "'Saira Stencil One', sans-serif", color: "#0D2561", lineHeight: 1.1 }}
        >
          {heading}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1A3C8F] to-[#F8C8D4] text-2xl md:text-3xl mt-1">
            Raw & Unfiltered
          </span>
        </h2>
      </div>

      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] flex items-center justify-center perspective-[1000px]">
        {videos.map((url, i) => {
          let offset = i - currentIndex;
          const total = videos.length;
          if (offset < -Math.floor(total / 2)) offset += total;
          if (offset > Math.floor(total / 2)) offset -= total;
          
          const isActive = offset === 0;
          const absOffset = Math.abs(offset);
          
          const translateX = offset * 110; 
          const scale = isActive ? 1 : Math.max(1 - absOffset * 0.15, 0.7);
          const zIndex = 50 - absOffset;
          const opacity = absOffset > 2 ? 0 : 1 - (absOffset * 0.4);

          return (
            <div 
              key={i} 
              onClick={() => {
                if (i !== currentIndex) setCurrentIndex(i);
                else setIsMuted(!isMuted);
              }}
              className="absolute w-[220px] sm:w-[260px] md:w-[300px] h-[380px] sm:h-[460px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl bg-black cursor-pointer border-[5px] border-white transition-all duration-700 ease-in-out"
              style={{
                transform: `translateX(${translateX}px) scale(${scale})`,
                zIndex,
                opacity,
                boxShadow: isActive ? "0 20px 40px -10px rgba(26,60,143, 0.5)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
              }}
            >
              <video
                ref={el => videoRefs.current[i] = el}
                src={url}
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover scale-105 pointer-events-none"
              />
              
              {!isActive && <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>}
              
              {isActive && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A3C8F]/80 pointer-events-none"></div>
                  <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center font-bold text-[#1A3C8F] text-[10px] shadow-md">
                        {label.charAt(0)}
                      </div>
                      <span className="font-semibold text-xs drop-shadow-md">{label}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl z-20 transition-all duration-300">
                    {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="flex justify-center items-center gap-6 mt-10">
         <button onClick={handlePrev} className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FDE8EE] text-[#1A3C8F] hover:bg-[#1A3C8F] hover:text-white transition-all duration-300 shadow-md hover:scale-110">
           <ChevronLeft size={20} strokeWidth={2.5} />
         </button>
         <button onClick={handleNext} className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FDE8EE] text-[#1A3C8F] hover:bg-[#1A3C8F] hover:text-white transition-all duration-300 shadow-md hover:scale-110">
           <ChevronRight size={20} strokeWidth={2.5} />
         </button>
      </div>
    </div>
  );
}

export default function FounderContent() {
  const [ref, isVisible] = useScrollReveal(0.2);

  if ((!FOUNDER_CONTENT?.videos || FOUNDER_CONTENT.videos.length === 0) && 
      (!INFLUENCER_CONTENT?.videos || INFLUENCER_CONTENT.videos.length === 0)) {
    return null;
  }

  return (
    <section
      id="founder-content"
      data-testid="founder-content-section"
      className="py-16 lg:py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-5%] w-96 h-96 rounded-full bg-[#F8C8D4]/30 animate-float-slow mix-blend-multiply filter blur-3xl" />
        <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#1A3C8F]/[0.04] animate-float-medium mix-blend-multiply filter blur-[80px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-80 h-80 rounded-full bg-[#0D2561]/[0.03] animate-float-fast mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 rounded-full bg-[#FDE8EE]/60 animate-float-slow filter blur-2xl" />
        <svg className="absolute w-full h-full opacity-[0.03] animate-float-medium" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#1A3C8F" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <div 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {FOUNDER_CONTENT?.videos?.length > 0 && (
            <VideoStack 
              heading={FOUNDER_CONTENT.heading} 
              subtext="Direct from the source"
              label="Founder Insights"
              videos={FOUNDER_CONTENT.videos} 
            />
          )}
          {INFLUENCER_CONTENT?.videos?.length > 0 && (
            <VideoStack 
              heading={INFLUENCER_CONTENT.heading} 
              subtext="Community Driven"
              label="Influencer Spotlight"
              videos={INFLUENCER_CONTENT.videos} 
            />
          )}
        </div>
      </div>
    </section>
  );
}
