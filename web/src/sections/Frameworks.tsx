import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, Calculator, Code2, Building2 } from "lucide-react";
import katex from "katex";

gsap.registerPlugin(ScrollTrigger);

interface FrameworkData {
  icon: React.ElementType;
  label: string;
  title: string;
  equation: string;
  description: string;
  translations: { audience: string; value: string }[];
}

const frameworks: FrameworkData[] = [
  {
    icon: Calculator,
    label: "LaTeX EQUATIONS",
    title: "Human-as-the-Loop (HatL) Architecture",
    equation: "J(\\theta) = \\mathbb{E}_{\\tau \\sim \\pi_\\theta}[R(\\tau)] + \\lambda \\cdot D_{KL}(\\pi_\\theta \\| \\pi_{\\text{human}})",
    description:
      "The objective function balances AI task performance with alignment to human intent. Reduces AI alignment risks by 87% through continuous human feedback integration.",
    translations: [
      { audience: "C-Suite", value: "Reduces AI alignment risks by 87%" },
      { audience: "Engineering", value: "Modular architecture with real-time intervention" },
      { audience: "Operations", value: "99.7% uptime with human veto authority" },
    ],
  },
  {
    icon: Code2,
    label: "PYTHON CODE",
    title: "Adaptive Synergy Optimization (ASO)",
    equation: "\\omega_i(t) = \\frac{C_i(t) \\cdot \\exp(\\beta \\cdot P_i(t))}{\\sum_{j=1}^{N} C_j(t) \\cdot \\exp(\\beta \\cdot P_j(t))}",
    description:
      "Dynamic authority distribution across multi-agent systems. Confidence-weighted decision making prevents single-point failures with real-time authority rebalancing.",
    translations: [
      { audience: "C-Suite", value: "Prevents single-point decision failures" },
      { audience: "Engineering", value: "Historical performance integration" },
      { audience: "Operations", value: "Real-time authority rebalancing" },
    ],
  },
  {
    icon: FileText,
    label: "FDA PATHWAYS",
    title: "Constitutional AI Training",
    equation: "\\mathcal{L}_{\\text{const}} = \\mathcal{L}_{\\text{task}} + \\sum_{i=1}^{K} \\gamma_i \\cdot \\mathbb{I}[\\text{violation}_i]",
    description:
      "Embedding ethical constraints directly into loss functions. Principle violations incur immediate training penalties, enabling explainable decision-making for regulatory compliance.",
    translations: [
      { audience: "C-Suite", value: "Explainable decision-making for compliance" },
      { audience: "Engineering", value: "Immediate training penalties for violations" },
      { audience: "Operations", value: "Scales from simple policies to complex alignment" },
    ],
  },
  {
    icon: Building2,
    label: "BUSINESS MODELS",
    title: "Strategic Value Optimization",
    equation: "\\text{SV} = \\sum_{t=0}^{T} \\frac{R_t}{(1+r)^t} + \\alpha \\cdot S + \\beta \\cdot I",
    description:
      "Multi-dimensional strategic value calculation incorporating direct revenue, social impact (S), and innovation potential (I) over a T-year horizon with discount rate r.",
    translations: [
      { audience: "C-Suite", value: "$867M in strategic value delivered" },
      { audience: "Engineering", value: "Quantifiable innovation metrics" },
      { audience: "Operations", value: "30-year investment theses modeled" },
    ],
  },
];

function EquationRender({ latex, displayMode = true }: { latex: string; displayMode?: boolean }) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(latex, {
        displayMode,
        throwOnError: false,
        trust: true,
      });
    } catch {
      return latex;
    }
  }, [latex, displayMode]);

  return (
    <span
      className={displayMode ? "katex-display" : "katex-inline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Frameworks() {
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
      id="frameworks"
      ref={sectionRef}
      className="relative bg-[#F7F6F1] py-24 lg:py-32 px-6 lg:px-12"
    >
      {/* Divider */}
      <div className="w-full h-px bg-black/10 mb-16 lg:mb-24" />

      {/* Section Header */}
      <div ref={headerRef} className="mb-16 lg:mb-20 text-center max-w-3xl mx-auto">
        <span className="font-mono-label text-black/40 block mb-4">
          007 — MATHEMATICAL FOUNDATION
        </span>
        <h2
          className="font-display text-black"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
        >
          FRAMEWORKS
        </h2>
        <p className="text-black/50 mt-4 text-sm leading-relaxed">
          Every framework is grounded in rigorous mathematics, validated through
          implementation code, and proven across multiple domains. Not theory—deployed
          systems creating measurable value.
        </p>
      </div>

      {/* Framework Cards */}
      <div className="max-w-4xl mx-auto space-y-16 lg:space-y-20">
        {frameworks.map((fw, idx) => {
          const Icon = fw.icon;
          return (
            <div
              key={idx}
              ref={(el) => { cardsRef.current[idx] = el; }}
              className="relative"
            >
              {/* Label */}
              <div className="flex items-center gap-3 mb-6">
                <Icon size={14} className="text-black/30" />
                <span className="font-mono-label text-black/30">{fw.label}</span>
              </div>

              {/* Title */}
              <h3 className="text-black text-lg lg:text-xl font-normal tracking-tight mb-6">
                {fw.title}
              </h3>

              {/* Equation Card */}
              <div className="bg-[#F0EFEA] border border-black/5 p-6 lg:p-8 mb-6 overflow-x-auto">
                <EquationRender latex={fw.equation} displayMode={true} />
              </div>

              {/* Description */}
              <p className="text-black/50 text-sm leading-relaxed mb-6 max-w-2xl">
                {fw.description}
              </p>

              {/* Industry Translations */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {fw.translations.map((t, i) => (
                  <div key={i} className="border-l border-black/10 pl-4">
                    <span className="font-mono-label text-black/30 text-[10px] block mb-1">
                      {t.audience}
                    </span>
                    <span className="text-black/70 text-sm">{t.value}</span>
                  </div>
                ))}
              </div>

              {/* Separator between cards */}
              {idx < frameworks.length - 1 && (
                <div className="w-full h-px bg-black/5 mt-16 lg:mt-20" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
