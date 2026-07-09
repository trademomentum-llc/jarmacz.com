import { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeroProps {
  onNavigate: (id: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          statsRef.current?.children ? Array.from(statsRef.current.children) : [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex flex-col justify-end pb-16 lg:pb-24 px-6 lg:px-12"
    >
      <div className="relative z-10 max-w-5xl">
        {/* Label */}
        <div className="mb-6">
          <span className="font-mono-label text-white/40">
            PORTFOLIO 2026
          </span>
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="font-display text-white mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          JASON JARMACZ
          <br />
          <span className="text-white/60">NEURODIVERGENT AI</span>
          <br />
          <span className="text-white/60">EVOLUTION STRATEGIST</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-white/80 text-lg lg:text-xl max-w-2xl mb-8 leading-relaxed"
        >
          Pioneering Human-as-the-Loop architectures and strategic frameworks
          across AI, healthcare, and complex systems.
        </p>

        {/* Description */}
        <p
          ref={descRef}
          className="text-white/40 text-sm max-w-xl mb-12 leading-relaxed"
        >
          Transforming impossible challenges into measurable outcomes through
          mathematical rigor, constitutional AI, and ethical innovation.
        </p>

        {/* Stats */}
        <div
          ref={statsRef}
          className="flex flex-wrap gap-8 lg:gap-12"
        >
          <div className="stat-card">
            <div className="text-white text-3xl lg:text-4xl font-light tracking-tight">
              99.7<span className="text-white/40">%</span>
            </div>
            <div className="font-mono-label text-white/40 mt-1">
              SYNERGY OPTIMIZATION
            </div>
          </div>
          <div className="stat-card">
            <div className="text-white text-3xl lg:text-4xl font-light tracking-tight">
              8
            </div>
            <div className="font-mono-label text-white/40 mt-1">
              PROJECTS
            </div>
          </div>
          <div className="stat-card">
            <div className="text-white text-3xl lg:text-4xl font-light tracking-tight">
              $867<span className="text-white/40">M</span>
            </div>
            <div className="font-mono-label text-white/40 mt-1">
              STRATEGIC VALUE
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex items-center gap-4">
          <a
            href="#featured"
            onClick={(e) => handleNavClick(e, "#featured")}
            className="font-mono-label text-white/30 hover:text-white/60 transition-colors flex items-center gap-2"
          >
            <span className="w-8 h-px bg-white/30 inline-block" />
            EXPLORE WORK
          </a>
        </div>
      </div>
    </section>
  );
}
