import { LOGO_CONFIG, NAV_LINKS, CONTACT, FOOTER } from "@/config/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const socialIcons = { facebook: Facebook, twitter: Twitter, instagram: Instagram, linkedin: Linkedin };

export default function Footer() {
  const [ref, isVisible] = useScrollReveal(0.1);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer data-testid="footer" className="bg-[#1A3C8F] text-white py-20 relative overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-white" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white" />
      </div>

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Col 1: Logo & Tagline */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0ms',
            }}
          >
            <div data-testid="footer-logo">
              {LOGO_CONFIG.src && LOGO_CONFIG.src !== "YOUR_LOGO_FILE_PATH_OR_URL_HERE" ? (
                <img
                  src={LOGO_CONFIG.src}
                  alt={LOGO_CONFIG.alt}
                  style={{ height: LOGO_CONFIG.height }}
                  className="brightness-0 invert"
                />
              ) : (
                <span className="font-heading text-2xl font-bold tracking-tight">
                  MARKETING MEDIA
                </span>
              )}
            </div>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              {FOOTER.tagline}
            </p>
            <div className="flex gap-3 mt-6" data-testid="footer-social-links">
              {Object.entries(CONTACT.socialLinks).map(([key, url]) => {
                const SocialIcon = socialIcons[key];
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`footer-social-${key}`}
                    className="social-icon w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#F8C8D4] hover:text-[#0D2561] transition-colors duration-200"
                  >
                    <SocialIcon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 150ms',
            }}
          >
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-6 text-white/90">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                    className="footer-link text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 300ms',
            }}
          >
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-6 text-white/90">
              Services
            </h4>
            <ul className="space-y-3">
              {FOOTER.services.map((service, i) => (
                <li key={i}>
                  <span className="text-sm text-white/60">{service}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-2">
              <div className="text-xs text-white/40">{CONTACT.email}</div>
              <div className="text-xs text-white/40">{CONTACT.phone}</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          data-testid="footer-bottom"
          className={`mt-16 pt-8 border-t border-white/10 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-xs text-white/40">
            &copy; 2025 MARKETING MEDIA. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
