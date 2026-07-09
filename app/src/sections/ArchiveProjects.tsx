import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import type { Project } from "./FeaturedProjects";

gsap.registerPlugin(ScrollTrigger);

interface ArchiveProjectsProps {
  projects: Project[];
}

export default function ArchiveProjects({ projects }: ArchiveProjectsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || projects.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      rowsRef.current.forEach((row, i) => {
        if (!row) return;
        gsap.fromTo(
          row,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [projects]);

  return (
    <section
      id="archive"
      ref={sectionRef}
      className="relative bg-[#F7F6F1] py-24 lg:py-32 px-6 lg:px-12"
    >
      {/* Divider */}
      <div className="w-full h-px bg-black/10 mb-16 lg:mb-24" />

      {/* Section Header */}
      <div ref={headerRef} className="mb-12 lg:mb-16">
        <span className="font-mono-label text-black/40 block mb-4">
          005 — ARCHIVE
        </span>
        <h2
          className="font-display text-black"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
        >
          COMPLETED PROJECTS
        </h2>
        <p className="text-black/50 mt-4 max-w-xl text-sm leading-relaxed">
          A selection of foundational work across neurotechnology, healthcare
          strategy, real estate development, cybersecurity, and biomedical AI.
        </p>
      </div>

      {/* Archive List */}
      <div className="max-w-5xl">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            ref={(el) => { rowsRef.current[idx] = el; }}
            className="archive-row group cursor-pointer py-6 lg:py-8 flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-8"
          >
            {/* Title */}
            <div className="flex-1 min-w-0">
              <h3 className="text-black text-base lg:text-lg font-normal tracking-tight group-hover:text-black/70 transition-colors">
                {project.title}
              </h3>
            </div>

            {/* Domain */}
            <div className="hidden lg:block w-48 shrink-0">
              <span className="font-mono-label text-black/30 text-[10px]">
                {project.domain}
              </span>
            </div>

            {/* Status */}
            <div className="flex items-center gap-4 shrink-0">
              <span className="font-mono-label text-black/40 text-[10px] border border-black/15 px-2 py-1">
                {project.status === "archived" ? "ARCHIVED" : "COMPLETED"}
              </span>
              <ArrowRight
                size={14}
                className="archive-arrow text-black/30 group-hover:text-black/60"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-black/10 mt-8" />
    </section>
  );
}
