import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  isDark?: boolean;
}

const navItems = [
  { label: "NEW PROJECTS", href: "#featured" },
  { label: "ARCHIVE", href: "#archive" },
  { label: "FRAMEWORKS", href: "#frameworks" },
  { label: "SERVICES", href: "#services" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navigation({ isDark = true }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? isDark
            ? "bg-black/80 backdrop-blur-md"
            : "bg-[#F7F6F1]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Brand */}
        <a
          href="#"
          className={`text-sm font-semibold tracking-widest transition-colors ${
            isDark ? "text-white" : "text-black"
          }`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          JARMACZ
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`font-mono-label transition-colors link-hover-slide ${
                isDark
                  ? "text-white/50 hover:text-white"
                  : "text-black/50 hover:text-black"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden transition-colors ${
            isDark ? "text-white" : "text-black"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className={`md:hidden absolute top-full left-0 right-0 border-t ${
            isDark
              ? "bg-black/95 border-white/10"
              : "bg-[#F7F6F1]/95 border-black/10"
          }`}
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-mono-label py-2 transition-colors ${
                  isDark
                    ? "text-white/50 hover:text-white"
                    : "text-black/50 hover:text-black"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
