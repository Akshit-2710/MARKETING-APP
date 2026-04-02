import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, LOGO_CONFIG } from "@/config/siteConfig";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_20px_rgba(13,37,97,0.08)]"
          : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} data-testid="navbar-logo">
          {LOGO_CONFIG.src && LOGO_CONFIG.src !== "YOUR_LOGO_FILE_PATH_OR_URL_HERE" ? (
            <img src={LOGO_CONFIG.src} alt={LOGO_CONFIG.alt} style={{ height: LOGO_CONFIG.height }} />
          ) : (
            <span className="font-heading text-xl md:text-2xl font-bold text-[#1A3C8F] tracking-tight">
              MARKETING MEDIA
            </span>
          )}
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[#1A3C8F]"
                    : "text-[#0D2561]/60 hover:text-[#1A3C8F]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          data-testid="navbar-cta"
          className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full bg-[#1A3C8F] text-white text-sm font-semibold hover:bg-[#0D2561] transition-colors duration-200"
        >
          Book a Free Call
        </a>

        {/* Mobile Toggle */}
        <button
          data-testid="navbar-mobile-menu-toggle"
          className="lg:hidden text-[#1A3C8F] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          data-testid="navbar-mobile-menu"
          className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#0D2561]/10 px-6 pb-6"
        >
          <ul className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-3 text-sm font-medium text-[#0D2561]/70 hover:text-[#1A3C8F] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                data-testid="navbar-mobile-cta"
                className="block text-center py-3 rounded-full bg-[#1A3C8F] text-white text-sm font-semibold"
              >
                Book a Free Call
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
