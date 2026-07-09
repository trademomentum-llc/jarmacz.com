import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileBarChart, BrainCircuit, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: FileBarChart,
    title: "Executive Documentation Suite",
    description:
      "Investment-grade business documents that translate complex technical innovation into C-suite clarity and stakeholder conviction. From SBIR proposals to strategic acquisition analyses.",
    price: "$5K – $25K",
    deliverables: ["SBIR Proposals", "Strategic Analyses", "White Papers", "Business Plans"],
  },
  {
    icon: BrainCircuit,
    title: "LLM Training & Sanitization",
    description:
      "Human-as-the-Loop methodologies for developing trustworthy, explainable AI systems with constitutional safeguards and adversarial robustness.",
    price: "$50K – $250K",
    deliverables: ["Constitutional AI", "Alignment Auditing", "Safety Training", "Evaluation Frameworks"],
  },
  {
    icon: Rocket,
    title: "Evolution Strategy Consulting",
    description:
      "Transform impossible challenges into tractable innovations through novel synthetic research, mathematical frameworks, and ethical pioneering.",
    price: "$15K/mo",
    deliverables: ["Strategic Roadmaps", "Technical Architecture", "Team Enablement", "Ongoing Advisory"],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
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
          { opacity: 0, y: 50 },
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
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-[#F7F6F1] py-24 lg:py-32 px-6 lg:px-12"
    >
      {/* Divider */}
      <div className="w-full h-px bg-black/10 mb-16 lg:mb-24" />

      {/* Section Header */}
      <div ref={headerRef} className="mb-16 lg:mb-20">
        <span className="font-mono-label text-black/40 block mb-4">
          011 — SERVICES
        </span>
        <h2
          className="font-display text-black"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
        >
          STRATEGIC SERVICES & CONSULTING
        </h2>
        <p className="text-black/50 mt-4 max-w-xl text-sm leading-relaxed">
          Transform your organization's AI capabilities and strategic documentation
          with battle-tested frameworks and novel methodologies.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={idx}
              ref={(el) => { cardsRef.current[idx] = el; }}
              className="group border-t-2 border-black pt-8 hover:border-black/60 transition-colors"
            >
              {/* Icon */}
              <div className="mb-6">
                <Icon size={24} className="text-black/40" />
              </div>

              {/* Title */}
              <h3 className="text-black text-lg font-normal tracking-tight mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-black/50 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="font-mono-label text-black/30 text-[10px] block mb-1">
                  INVESTMENT
                </span>
                <span className="text-black text-base font-light">
                  {service.price}
                </span>
              </div>

              {/* Deliverables */}
              <div>
                <span className="font-mono-label text-black/30 text-[10px] block mb-2">
                  DELIVERABLES
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.deliverables.map((d, i) => (
                    <span
                      key={i}
                      className="text-black/50 text-xs border border-black/10 px-2 py-1"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
