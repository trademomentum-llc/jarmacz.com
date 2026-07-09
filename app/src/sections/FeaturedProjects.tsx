import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export interface Project {
  id: number;
  title: string;
  slug: string;
  tagline: string | null;
  domain: string | null;
  description: string | null;
  status: "featured" | "archived" | "completed";
  sortOrder: number | null;
  imageUrl: string | null;
  stats: { label: string; value: string }[] | null;
  tags: string[] | null;
  links: { label: string; url: string }[] | null;
  createdAt: Date;
  updatedAt: Date;
}

interface FeaturedProjectsProps {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [projects]);

  if (projects.length === 0) return null;

  // Layout: first project full-width, then 2x2 grid for remaining
  const firstProject = projects[0];
  const restProjects = projects.slice(1);

  return (
    <section
      id="featured"
      ref={sectionRef}
      className="relative bg-[#F7F6F1] py-24 lg:py-32 px-6 lg:px-12"
    >
      {/* Section Header */}
      <div ref={headerRef} className="mb-16 lg:mb-24">
        <span className="font-mono-label text-black/40 block mb-4">
          003 — FEATURED WORK
        </span>
        <h2
          className="font-display text-black"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
        >
          NEWEST PROJECTS
        </h2>
        <p className="text-black/50 mt-4 max-w-xl text-sm leading-relaxed">
          Five next-generation initiatives spanning natural language processing,
          programming languages, bare-metal systems, and neurodivergent-aware
          operating systems.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-8 lg:space-y-12">
        {/* First project - full width */}
        {firstProject && (
          <div
            ref={(el) => { cardsRef.current[0] = el; }}
            className="group cursor-pointer"
          >
            <div className="project-image-container aspect-[21/9] bg-black">
              <img
                src={firstProject.imageUrl || "/images/hero-abstract.jpg"}
                alt={firstProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="mt-6 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="flex-1">
                <span className="font-mono-label text-black/40 block mb-2">
                  {firstProject.domain}
                </span>
                <h3 className="text-black text-xl lg:text-2xl font-normal tracking-tight mb-2">
                  {firstProject.title}
                </h3>
                <p className="text-black/50 text-sm leading-relaxed max-w-2xl">
                  {firstProject.tagline}
                </p>
              </div>
              <div className="flex items-center gap-2 text-black/30 group-hover:text-black/60 transition-colors">
                <span className="font-mono-label">VIEW</span>
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
            {/* Stats */}
            {firstProject.stats && (
              <div className="mt-6 flex flex-wrap gap-6 lg:gap-10">
                {firstProject.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-black text-lg font-light">{stat.value}</div>
                    <div className="font-mono-label text-black/40 text-[10px]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Remaining projects - 2x2 grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {restProjects.map((project, idx) => (
            <div
              key={project.id}
              ref={(el) => { cardsRef.current[idx + 1] = el; }}
              className="group cursor-pointer"
            >
              <div className="project-image-container aspect-[16/10] bg-black">
                <img
                  src={project.imageUrl || "/images/hero-abstract.jpg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="mt-5">
                <span className="font-mono-label text-black/40 block mb-2">
                  {project.domain}
                </span>
                <h3 className="text-black text-lg lg:text-xl font-normal tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-black/50 text-sm leading-relaxed mb-4">
                  {project.tagline}
                </p>
                {/* Stats */}
                {project.stats && (
                  <div className="flex flex-wrap gap-5">
                    {project.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-black text-base font-light">{stat.value}</div>
                        <div className="font-mono-label text-black/40 text-[10px]">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
