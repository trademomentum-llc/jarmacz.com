import { useEffect, useState, useCallback } from "react";
import { Routes, Route } from "react-router";
import LissajousBackground from "./components/custom/LissajousBackground";
import Navigation from "./components/custom/Navigation";
import Footer from "./components/custom/Footer";
import Hero from "./sections/Hero";
import FeaturedProjects from "./sections/FeaturedProjects";
import ArchiveProjects from "./sections/ArchiveProjects";
import Frameworks from "./sections/Frameworks";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { trpc } from "./providers/trpc";
import type { Project } from "./sections/FeaturedProjects";

// Static fallback data in case DB is unavailable
const FALLBACK_FEATURED: Project[] = [
  {
    id: 1,
    title: "Morphlex",
    slug: "morphlex",
    tagline: "Natural Language Tokenizer/Lexer that bridges human expression and machine comprehension through adaptive lexical analysis",
    domain: "NLP × Compiler Design",
    description: "Morphlex is a next-generation Natural Language Tokenizer and Lexer designed to bridge the gap between human expression and machine comprehension through adaptive lexical analysis.",
    status: "featured",
    sortOrder: 1,
    imageUrl: "/images/project-morphlex.jpg",
    stats: [
      { label: "Languages Supported", value: "40+" },
      { label: "Tokenization Speed", value: "2.4M tok/s" },
      { label: "Accuracy", value: "99.2%" },
      { label: "Context Windows", value: "128K" },
    ],
    tags: ["NLP", "Tokenizer", "Lexer", "Compiler"],
    links: [{ label: "GitHub", url: "#" }],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: "Jasterish",
    slug: "jasterish",
    tagline: "Self-hosted Natural Language programming language and command-line utility for intuitive code expression",
    domain: "Programming Language × CLI",
    description: "Jasterish is a self-hosted Natural Language programming language that allows developers to express computational intent in plain English while maintaining full programmatic rigor.",
    status: "featured",
    sortOrder: 2,
    imageUrl: "/images/project-jasterish.jpg",
    stats: [
      { label: "Parse Trees/sec", value: "850K" },
      { label: "Self-Hosted", value: "100%" },
      { label: "Syntax Error Recovery", value: "94%" },
      { label: "Binary Size", value: "<2MB" },
    ],
    tags: ["Programming Language", "CLI", "Natural Language", "Compiler"],
    links: [{ label: "GitHub", url: "#" }],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    title: "JMK",
    slug: "jmk",
    tagline: "Jasterish-based Bare Metal Kernel and services — an OS built from natural language foundations",
    domain: "Systems × OS Development",
    description: "JMK (Jasterish Micro Kernel) is a bare-metal kernel and system services layer written in Jasterish, proving that natural language programming can reach the lowest levels of system software.",
    status: "featured",
    sortOrder: 3,
    imageUrl: "/images/project-jmk.jpg",
    stats: [
      { label: "Boot Time", value: "<120ms" },
      { label: "Kernel Size", value: "64KB" },
      { label: "Syscalls", value: "48 NL-native" },
      { label: "Architectures", value: "x86_64, ARM64" },
    ],
    tags: ["Kernel", "Bare Metal", "OS", "Jasterish"],
    links: [{ label: "GitHub", url: "#" }],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    title: "NeuroDiOS",
    slug: "neurodios",
    tagline: "NeuroDivergent-aware deterministic and trauma-aware responsive Operating System",
    domain: "Accessibility × OS Design",
    description: "NeuroDiOS is the world's first operating system designed from the ground up for neurodivergent users, featuring deterministic execution, trauma-aware interfaces, and sensory-friendly interactions.",
    status: "featured",
    sortOrder: 4,
    imageUrl: "/images/project-neurodios.jpg",
    stats: [
      { label: "Accessibility Score", value: "AA+" },
      { label: "Adaptation Latency", value: "<200ms" },
      { label: "User Satisfaction", value: "96%" },
      { label: "Cognitive Load Reduction", value: "42%" },
    ],
    tags: ["Neurodivergent", "Accessibility", "OS", "Deterministic"],
    links: [{ label: "GitHub", url: "#" }],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    title: "AethosOS",
    slug: "aethosos",
    tagline: "Gated and deterministic Operating System built to promote progress and uplift",
    domain: "Ethics × OS Architecture",
    description: "AethosOS is a gated and deterministic operating system engineered to create a computing environment that actively promotes human progress and uplift through built-in ethical guardrails.",
    status: "featured",
    sortOrder: 5,
    imageUrl: "/images/project-aethosos.jpg",
    stats: [
      { label: "Ethical Gate Coverage", value: "100%" },
      { label: "Determinism Score", value: "0.998" },
      { label: "Overhead", value: "<3%" },
      { label: "Constitutional Principles", value: "12" },
    ],
    tags: ["Constitutional AI", "Ethics", "OS", "Deterministic"],
    links: [{ label: "GitHub", url: "#" }],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const FALLBACK_ARCHIVED: Project[] = [
  {
    id: 6,
    title: "NeuroDivergent AI Platform",
    slug: "neurodivergent-ai-platform",
    tagline: "Human-as-the-Loop brain-computer interface integrating non-invasive BCIs, deep learning, and focused ultrasound neuromodulation",
    domain: "Neurotechnology × AI",
    description: "Revolutionary Human-as-the-Loop brain-computer interface integrating non-invasive BCIs, deep learning, and focused ultrasound neuromodulation.",
    status: "archived",
    sortOrder: 6,
    imageUrl: "/images/project-neurodivergent.jpg",
    stats: [
      { label: "Words/Min Speech", value: "80" },
      { label: "Risk Reduction", value: "87%" },
      { label: "Cost Savings", value: "40%" },
    ],
    tags: ["BCI", "Neurotechnology", "HatL", "Healthcare"],
    links: [{ label: "Framework", url: "#" }],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 7,
    title: "Integrated Health Empowerment Program (IHEP)",
    slug: "ihep-health-empowerment",
    tagline: "Next-generation HIV care framework bridging grassroots community engagement with AI-driven digital health twins",
    domain: "Healthcare × AI",
    description: "Next-generation HIV care framework bridging grassroots community engagement with AI-driven digital health twins.",
    status: "archived",
    sortOrder: 7,
    imageUrl: "/images/project-ihep.jpg",
    stats: [
      { label: "Patient Capacity", value: "350" },
      { label: "Compliance", value: "NIST AI RMF" },
      { label: "Security", value: "ZTA Model" },
    ],
    tags: ["HIV Care", "Digital Twins", "NIST RMF", "Community Health"],
    links: [{ label: "Learn More", url: "#" }],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 8,
    title: "Mission Valley Nexus | $215M Acquisition Strategy",
    slug: "mission-valley-nexus",
    tagline: "Comprehensive multi-pathway analysis for transformative 17.38-acre property development",
    domain: "Strategic Development",
    description: "Comprehensive multi-pathway analysis for transformative 17.38-acre property development.",
    status: "archived",
    sortOrder: 8,
    imageUrl: "/images/project-missionvalley.jpg",
    stats: [
      { label: "Asset Value", value: "$215M" },
      { label: "Jobs Created", value: "1000+" },
      { label: "Economic Impact", value: "$1.1B" },
    ],
    tags: ["Real Estate", "Strategy", "ROI Analysis", "Economic Development"],
    links: [{ label: "View Analysis", url: "#" }],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 9,
    title: "JESS | Secure WBAN/BACnet Pipeline",
    slug: "jess-secure-wban",
    tagline: "Joint Ethics on Safety & Standards for validated OSI Layer secured transmission across WBAN and Building Automation",
    domain: "Cybersecurity × IoT",
    description: "Joint Ethics on Safety & Standards for validated OSI Layer secured transmission across Wireless Body Area Networks and Building Automation systems.",
    status: "archived",
    sortOrder: 9,
    imageUrl: "/images/project-jess.jpg",
    stats: [
      { label: "OSI Layers Secured", value: "7" },
      { label: "Trust Model", value: "Zero Trust" },
      { label: "Energy Savings", value: "40%" },
    ],
    tags: ["Zero Trust", "WBAN", "BACnet", "First Responders"],
    links: [{ label: "Download Summary", url: "#" }],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 10,
    title: "AI-Driven DIPG Therapeutic Discovery",
    slug: "dipg-therapeutic-discovery",
    tagline: "Revolutionary machine learning approach to pediatric brain cancer treatment using generative AI",
    domain: "Biomedical AI",
    description: "Revolutionary machine learning approach to pediatric brain cancer treatment using generative AI.",
    status: "archived",
    sortOrder: 10,
    imageUrl: "/images/project-dipg.jpg",
    stats: [
      { label: "Current Survival", value: "<1%" },
      { label: "Approach", value: "AI Drug Design" },
      { label: "Timeline", value: "12mo" },
    ],
    tags: ["Generative AI", "Drug Discovery", "DIPG", "Pediatric Cancer"],
    links: [{ label: "Research Summary", url: "#" }],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

function Portfolio() {
  const [inLightSection, setInLightSection] = useState(false);

  const featuredQuery = trpc.projects.list.useQuery(
    { status: "featured" },
    { retry: false }
  );
  const archivedQuery = trpc.projects.list.useQuery(
    { status: "archived" },
    { retry: false }
  );

  const featuredProjects = featuredQuery.data ?? FALLBACK_FEATURED;
  const archivedProjects = archivedQuery.data ?? FALLBACK_ARCHIVED;

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setInLightSection(window.scrollY > heroHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = useCallback((id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="relative">
      {/* Lissajous Background - only visible in hero */}
      {!inLightSection && <LissajousBackground />}

      {/* Navigation */}
      <Navigation isDark={!inLightSection} />

      {/* Main Content */}
      <main className="relative">
        {/* Hero - Dark */}
        <Hero onNavigate={handleNavigate} />

        {/* Transition */}
        <div className="section-transition" />

        {/* Featured Projects - Light */}
        <FeaturedProjects projects={featuredProjects} />

        {/* Archive Projects - Light */}
        <ArchiveProjects projects={archivedProjects} />

        {/* Frameworks - Light */}
        <Frameworks />

        {/* Services - Light */}
        <Services />

        {/* Contact - Light */}
        <Contact />

        {/* Footer - Light */}
        <Footer />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
