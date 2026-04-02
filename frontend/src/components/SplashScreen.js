import { useState, useEffect } from "react";
import { LOGO_CONFIG } from "@/config/siteConfig";

export default function SplashScreen({ onComplete }) {
  const [phase, setPhase] = useState(0); // 0=logo-in, 1=logo-hold, 2=exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 600);
    const t2 = setTimeout(() => setPhase(2), 1800);
    const t3 = setTimeout(() => onComplete(), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div
      data-testid="splash-screen"
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-600 ${
        phase === 2 ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
      style={{ background: "linear-gradient(135deg, #1A3C8F 0%, #0D2561 100%)" }}
    >
      {/* Radial glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(248,200,212,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div
        className={`relative z-10 text-center transition-all duration-700 ${
          phase >= 1
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-95"
        }`}
      >
        {LOGO_CONFIG.src && LOGO_CONFIG.src !== "YOUR_LOGO_FILE_PATH_OR_URL_HERE" ? (
          <img
            src={LOGO_CONFIG.src}
            alt={LOGO_CONFIG.alt}
            style={{ height: "80px" }}
            className="mx-auto brightness-0 invert"
          />
        ) : (
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tight">
            MARKETING MEDIA
          </h1>
        )}
        {/* Animated underline */}
        <div className="mt-4 mx-auto overflow-hidden h-[2px] w-24">
          <div
            className={`h-full bg-[#F8C8D4] transition-transform duration-700 ease-out ${
              phase >= 1 ? "translate-x-0" : "-translate-x-full"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
