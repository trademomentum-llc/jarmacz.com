import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F7F6F1] py-12 px-6 lg:px-12 border-t border-black/10">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {/* Left */}
        <div>
          <span className="text-black text-sm font-semibold tracking-widest">
            JARMACZ
          </span>
          <p className="text-black/40 text-xs mt-2">
            NeuroDivergent AI Evolution Strategist
          </p>
        </div>

        {/* Center */}
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="#featured"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#featured")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-mono-label text-black/30 hover:text-black/60 transition-colors text-[10px]"
          >
            NEW PROJECTS
          </a>
          <a
            href="#archive"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#archive")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-mono-label text-black/30 hover:text-black/60 transition-colors text-[10px]"
          >
            ARCHIVE
          </a>
          <a
            href="#frameworks"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#frameworks")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-mono-label text-black/30 hover:text-black/60 transition-colors text-[10px]"
          >
            FRAMEWORKS
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-mono-label text-black/30 hover:text-black/60 transition-colors text-[10px]"
          >
            SERVICES
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-mono-label text-black/30 hover:text-black/60 transition-colors text-[10px]"
          >
            CONTACT
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <span className="text-black/30 text-xs">
            &copy; {new Date().getFullYear()} Jason Jarmacz
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 border border-black/10 hover:border-black/30 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} className="text-black/40" />
          </button>
        </div>
      </div>
    </footer>
  );
}
