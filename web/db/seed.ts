import { getDb } from "../api/queries/connection";
import { projects } from "./schema";

const SEED_PROJECTS = [
  // 5 NEW FEATURED PROJECTS
  {
    title: "Morphlex",
    slug: "morphlex",
    tagline: "Natural Language Tokenizer/Lexer that bridges human expression and machine comprehension through adaptive lexical analysis",
    domain: "NLP × Compiler Design",
    description: "Morphlex is a next-generation Natural Language Tokenizer and Lexer designed to bridge the gap between human expression and machine comprehension. It employs adaptive lexical analysis techniques to parse natural language inputs into structured token streams, enabling seamless integration between human-readable instructions and programmatic execution. The system supports multi-language tokenization with context-aware disambiguation.",
    status: "featured" as const,
    sortOrder: 1,
    imageUrl: "/images/project-morphlex.jpg",
    stats: [
      { label: "Languages Supported", value: "40+" },
      { label: "Tokenization Speed", value: "2.4M tok/s" },
      { label: "Accuracy", value: "99.2%" },
      { label: "Context Windows", value: "128K" },
    ],
    tags: ["NLP", "Tokenizer", "Lexer", "Compiler"],
    links: [
      { label: "GitHub", url: "#" },
      { label: "Documentation", url: "#" },
    ],
  },
  {
    title: "Jasterish",
    slug: "jasterish",
    tagline: "Self-hosted Natural Language programming language and command-line utility for intuitive code expression",
    domain: "Programming Language × CLI",
    description: "Jasterish is a self-hosted Natural Language programming language that allows developers to express computational intent in plain English (or any natural language) while maintaining full programmatic rigor. The accompanying command-line utility provides a seamless REPL experience, compilation pipeline, and package management system — all designed to lower the barrier to programming while preserving the power of traditional languages.",
    status: "featured" as const,
    sortOrder: 2,
    imageUrl: "/images/project-jasterish.jpg",
    stats: [
      { label: "Parse Trees/sec", value: "850K" },
      { label: "Self-Hosted", value: "100%" },
      { label: "Syntax Error Recovery", value: "94%" },
      { label: "Binary Size", value: "<2MB" },
    ],
    tags: ["Programming Language", "CLI", "Natural Language", "Compiler"],
    links: [
      { label: "GitHub", url: "#" },
      { label: "Playground", url: "#" },
    ],
  },
  {
    title: "JMK",
    slug: "jmk",
    tagline: "Jasterish-based Bare Metal Kernel and services — an OS built from natural language foundations",
    domain: "Systems × OS Development",
    description: "JMK (Jasterish Micro Kernel) is a bare-metal kernel and system services layer written in Jasterish, proving that natural language programming can reach the lowest levels of system software. It features a deterministic scheduler, memory-safe kernelspace, and a novel syscall interface that accepts natural language descriptions of operations. JMK demonstrates that accessibility and systems programming are not mutually exclusive.",
    status: "featured" as const,
    sortOrder: 3,
    imageUrl: "/images/project-jmk.jpg",
    stats: [
      { label: "Boot Time", value: "<120ms" },
      { label: "Kernel Size", value: "64KB" },
      { label: "Syscalls", value: "48 NL-native" },
      { label: "Architectures", value: "x86_64, ARM64" },
    ],
    tags: ["Kernel", "Bare Metal", "OS", "Jasterish"],
    links: [
      { label: "GitHub", url: "#" },
      { label: "Build Guide", url: "#" },
    ],
  },
  {
    title: "NeuroDiOS",
    slug: "neurodios",
    tagline: "NeuroDivergent-aware deterministic and trauma-aware responsive Operating System",
    domain: "Accessibility × OS Design",
    description: "NeuroDiOS is the world's first operating system designed from the ground up for neurodivergent users. It features a deterministic execution environment that eliminates unpredictable UI changes, a trauma-aware responsive interface that adapts to user stress indicators, and sensory-friendly interaction patterns. The OS provides customizable cognitive load management, executive function assistance, and ambient awareness tools that respect the diverse ways brains process information.",
    status: "featured" as const,
    sortOrder: 4,
    imageUrl: "/images/project-neurodios.jpg",
    stats: [
      { label: "Accessibility Score", value: "AA+" },
      { label: "Adaptation Latency", value: "<200ms" },
      { label: "User Satisfaction", value: "96%" },
      { label: "Cognitive Load Reduction", value: "42%" },
    ],
    tags: ["Neurodivergent", "Accessibility", "OS", "Deterministic"],
    links: [
      { label: "GitHub", url: "#" },
      { label: "Research Paper", url: "#" },
    ],
  },
  {
    title: "AethosOS",
    slug: "aethosos",
    tagline: "Gated and deterministic Operating System built to promote progress and uplift",
    domain: "Ethics × OS Architecture",
    description: "AethosOS is a gated and deterministic operating system engineered to create a computing environment that actively promotes human progress and uplift. It features a principle-gated execution model where all system operations are evaluated against ethical frameworks before execution. The deterministic scheduling and resource allocation ensure fair, predictable system behavior. AethosOS embeds constitutional AI principles at the kernel level, creating the first operating system with built-in ethical guardrails.",
    status: "featured" as const,
    sortOrder: 5,
    imageUrl: "/images/project-aethosos.jpg",
    stats: [
      { label: "Ethical Gate Coverage", value: "100%" },
      { label: "Determinism Score", value: "0.998" },
      { label: "Overhead", value: "<3%" },
      { label: "Constitutional Principles", value: "12" },
    ],
    tags: ["Constitutional AI", "Ethics", "OS", "Deterministic"],
    links: [
      { label: "GitHub", url: "#" },
      { label: "Whitepaper", url: "#" },
    ],
  },
  // 5 ARCHIVED PROJECTS (from original jarmacz.com)
  {
    title: "NeuroDivergent AI Platform",
    slug: "neurodivergent-ai-platform",
    tagline: "Human-as-the-Loop brain-computer interface integrating non-invasive BCIs, deep learning, and focused ultrasound neuromodulation",
    domain: "Neurotechnology × AI",
    description: "Revolutionary Human-as-the-Loop brain-computer interface integrating non-invasive BCIs, deep learning, and focused ultrasound neuromodulation. Restoring communication for paralyzed patients while pioneering ethical AI-human symbiosis.",
    status: "archived" as const,
    sortOrder: 6,
    imageUrl: "/images/project-neurodivergent.jpg",
    stats: [
      { label: "Words/Min Speech", value: "80" },
      { label: "Risk Reduction", value: "87%" },
      { label: "Cost Savings", value: "40%" },
    ],
    tags: ["BCI", "Neurotechnology", "HatL", "Healthcare"],
    links: [
      { label: "Framework", url: "#" },
      { label: "Research", url: "#" },
    ],
  },
  {
    title: "Integrated Health Empowerment Program (IHEP)",
    slug: "ihep-health-empowerment",
    tagline: "Next-generation HIV care framework bridging grassroots community engagement with AI-driven digital health twins",
    domain: "Healthcare × AI",
    description: "Next-generation HIV care framework bridging grassroots community engagement with AI-driven digital health twins. NIST-compliant Zero Trust architecture accelerating pathways from management toward functional cure.",
    status: "archived" as const,
    sortOrder: 7,
    imageUrl: "/images/project-ihep.jpg",
    stats: [
      { label: "Patient Capacity", value: "350" },
      { label: "Compliance", value: "NIST AI RMF" },
      { label: "Security", value: "ZTA Model" },
    ],
    tags: ["HIV Care", "Digital Twins", "NIST RMF", "Community Health"],
    links: [
      { label: "Learn More", url: "#" },
    ],
  },
  {
    title: "Mission Valley Nexus | $215M Acquisition Strategy",
    slug: "mission-valley-nexus",
    tagline: "Comprehensive multi-pathway analysis for transformative 17.38-acre property development",
    domain: "Strategic Development",
    description: "Comprehensive multi-pathway analysis for transformative 17.38-acre property development. Three distinct acquisition models: UCSD Innovation Hub, Faith-Community Partnership, and Corporate Life Sciences Campus with 194% ROI projections.",
    status: "archived" as const,
    sortOrder: 8,
    imageUrl: "/images/project-missionvalley.jpg",
    stats: [
      { label: "Asset Value", value: "$215M" },
      { label: "Jobs Created", value: "1000+" },
      { label: "Economic Impact", value: "$1.1B" },
      { label: "Equity Multiple", value: "4.89x" },
    ],
    tags: ["Real Estate", "Strategy", "ROI Analysis", "Economic Development"],
    links: [
      { label: "View Analysis", url: "#" },
    ],
  },
  {
    title: "JESS | Secure WBAN/BACnet Pipeline",
    slug: "jess-secure-wban",
    tagline: "Joint Ethics on Safety & Standards for validated OSI Layer secured transmission across WBAN and Building Automation",
    domain: "Cybersecurity × IoT",
    description: "Joint Ethics on Safety & Standards for validated OSI Layer secured transmission across Wireless Body Area Networks and Building Automation systems. NIST SP 800-207 Zero Trust architecture protecting first responder biometric data.",
    status: "archived" as const,
    sortOrder: 9,
    imageUrl: "/images/project-jess.jpg",
    stats: [
      { label: "OSI Layers Secured", value: "7" },
      { label: "Trust Model", value: "Zero Trust" },
      { label: "Energy Savings", value: "40%" },
    ],
    tags: ["Zero Trust", "WBAN", "BACnet", "First Responders"],
    links: [
      { label: "Download Summary", url: "#" },
    ],
  },
  {
    title: "AI-Driven DIPG Therapeutic Discovery",
    slug: "dipg-therapeutic-discovery",
    tagline: "Revolutionary machine learning approach to pediatric brain cancer treatment using generative AI",
    domain: "Biomedical AI",
    description: "Revolutionary machine learning approach to pediatric brain cancer treatment. Generative AI models designing novel brain-penetrant molecules targeting DIPG's unique metabolic vulnerabilities—bypassing decades of failed traditional approaches.",
    status: "archived" as const,
    sortOrder: 10,
    imageUrl: "/images/project-dipg.jpg",
    stats: [
      { label: "Current Survival", value: "<1%" },
      { label: "Approach", value: "AI Drug Design" },
      { label: "Timeline", value: "12mo" },
    ],
    tags: ["Generative AI", "Drug Discovery", "DIPG", "Pediatric Cancer"],
    links: [
      { label: "Research Summary", url: "#" },
    ],
  },
];

async function seed() {
  const db = getDb();
  console.log("Seeding portfolio projects...");

  // Clear existing projects
  await db.delete(projects);
  console.log("Cleared existing projects.");

  // Insert seed projects
  for (const project of SEED_PROJECTS) {
    await db.insert(projects).values(project);
    console.log(`Inserted: ${project.title}`);
  }

  console.log("Seed complete! Inserted 10 projects (5 featured + 5 archived).");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed error:", err);
  process.exit(1);
});
