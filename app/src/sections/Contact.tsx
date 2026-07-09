import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, Linkedin, Send, CheckCircle } from "lucide-react";
import { trpc } from "@/providers/trpc";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = trpc.contacts.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    },
  });

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

      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    submitMutation.mutate({ name, email, message });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-[#F7F6F1] py-24 lg:py-32 px-6 lg:px-12"
    >
      {/* Divider */}
      <div className="w-full h-px bg-black/10 mb-16 lg:mb-24" />

      {/* Section Header */}
      <div ref={headerRef} className="mb-16 lg:mb-20">
        <span className="font-mono-label text-black/40 block mb-4">
          013 — CONTACT
        </span>
        <h2
          className="font-display text-black"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
        >
          LET'S MAKE HISTORY TOGETHER
        </h2>
        <p className="text-black/50 mt-4 max-w-xl text-sm leading-relaxed">
          Transform impossible challenges into measurable outcomes. Whether you're
          pioneering novel AI systems, navigating complex strategic acquisitions, or
          need investment-grade documentation that converts skeptics into believers.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-5xl">
        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
          {submitted ? (
            <div className="flex items-center gap-4 py-8">
              <CheckCircle size={20} className="text-green-600" />
              <div>
                <p className="text-black font-medium">Message sent successfully</p>
                <p className="text-black/50 text-sm">
                  Thank you for reaching out. I'll be in touch soon.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div>
                <label className="font-mono-label text-black/40 text-[10px] block mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="form-input text-black"
                  required
                />
              </div>

              <div>
                <label className="font-mono-label text-black/40 text-[10px] block mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="form-input text-black"
                  required
                />
              </div>

              <div>
                <label className="font-mono-label text-black/40 text-[10px] block mb-2">
                  MESSAGE
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="form-input text-black resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitMutation.isPending}
                className="btn-brutalist flex items-center gap-2 disabled:opacity-50"
              >
                <Send size={12} />
                {submitMutation.isPending ? "SENDING..." : "SUBMIT"}
              </button>

              {submitMutation.isError && (
                <p className="text-red-600 text-sm">
                  Something went wrong. Please try again or reach out directly.
                </p>
              )}
            </>
          )}
        </form>

        {/* Contact Info */}
        <div ref={infoRef} className="space-y-10">
          <div>
            <span className="font-mono-label text-black/40 text-[10px] block mb-4">
              DIRECT CONTACT
            </span>
            <div className="space-y-4">
              <a
                href="mailto:jason@jarmacz.com"
                className="flex items-center gap-3 text-black hover:text-black/60 transition-colors"
              >
                <Mail size={16} className="text-black/30" />
                <span className="text-sm">jason@jarmacz.com</span>
              </a>
              <a
                href="tel:+19175668112"
                className="flex items-center gap-3 text-black hover:text-black/60 transition-colors"
              >
                <Phone size={16} className="text-black/30" />
                <span className="text-sm">(917) 566-8112</span>
              </a>
              <a
                href="https://linkedin.com/in/omniunum"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-black hover:text-black/60 transition-colors"
              >
                <Linkedin size={16} className="text-black/30" />
                <span className="text-sm">linkedin.com/in/omniunum</span>
              </a>
            </div>
          </div>

          <div>
            <span className="font-mono-label text-black/40 text-[10px] block mb-4">
              AVAILABILITY
            </span>
            <p className="text-black/50 text-sm leading-relaxed">
              Currently accepting new engagements for Q3 2025. Preferred project
              minimum: $15K. Retainer arrangements available for ongoing strategic
              partnerships.
            </p>
          </div>

          <div>
            <span className="font-mono-label text-black/40 text-[10px] block mb-4">
              RESPONSE TIME
            </span>
            <p className="text-black/50 text-sm">
              Within 24 hours for all inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
