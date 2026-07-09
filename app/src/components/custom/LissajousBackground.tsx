import { useEffect, useRef } from "react";
import gsap from "gsap";

interface GradientBlob {
  el: HTMLDivElement;
  freqX: number;
  freqY: number;
  ampX: number;
  ampY: number;
  phaseOffset: number;
}

export default function LissajousBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Much more vibrant gradients with higher opacity
    const gradients = [
      {
        gradient: "radial-gradient(ellipse 700px 500px at center, rgba(120, 20, 20, 0.55) 0%, rgba(80, 0, 0, 0.3) 35%, rgba(40, 0, 0, 0.1) 60%, transparent 75%)",
        left: "15%",
        top: "25%",
        freqX: 1,
        freqY: 2,
        ampX: 100,
        ampY: 70,
        phaseOffset: 0,
      },
      {
        gradient: "radial-gradient(ellipse 600px 600px at center, rgba(20, 100, 40, 0.5) 0%, rgba(10, 60, 20, 0.25) 35%, rgba(5, 30, 10, 0.08) 60%, transparent 75%)",
        left: "55%",
        top: "35%",
        freqX: 2,
        freqY: 3,
        ampX: 70,
        ampY: 100,
        phaseOffset: Math.PI / 3,
      },
      {
        gradient: "radial-gradient(ellipse 500px 400px at center, rgba(139, 120, 20, 0.35) 0%, rgba(100, 80, 10, 0.18) 40%, rgba(50, 40, 5, 0.06) 65%, transparent 78%)",
        left: "35%",
        top: "65%",
        freqX: 1.5,
        freqY: 2.5,
        ampX: 120,
        ampY: 60,
        phaseOffset: Math.PI / 2,
      },
      {
        gradient: "radial-gradient(ellipse 400px 300px at center, rgba(80, 60, 100, 0.3) 0%, rgba(50, 30, 70, 0.12) 45%, transparent 70%)",
        left: "75%",
        top: "70%",
        freqX: 1.2,
        freqY: 1.8,
        ampX: 50,
        ampY: 80,
        phaseOffset: Math.PI / 4,
      },
    ];

    // Create gradient blobs
    const blobs: GradientBlob[] = gradients.map((g, i) => {
      const el = document.createElement("div");
      el.style.cssText = `
        position: absolute;
        width: 1000px;
        height: 1000px;
        background: ${g.gradient};
        filter: blur(80px);
        border-radius: 50%;
        will-change: transform;
        opacity: 0.85;
      `;
      el.style.left = g.left;
      el.style.top = g.top;
      el.style.marginLeft = "-500px";
      el.style.marginTop = "-500px";
      container.appendChild(el);

      return {
        el,
        freqX: g.freqX,
        freqY: g.freqY,
        ampX: g.ampX,
        ampY: g.ampY,
        phaseOffset: g.phaseOffset,
      };
    });

    // Animate with GSAP - slower for more elegant drift
    const duration = 25;
    animRef.current = gsap.to(
      { t: 0 },
      {
        t: Math.PI * 2,
        duration,
        ease: "none",
        repeat: -1,
        onUpdate: function () {
          const t = this.targets()[0].t;
          blobs.forEach((blob) => {
            const x = Math.sin(t * blob.freqX + blob.phaseOffset) * blob.ampX;
            const y = Math.sin(t * blob.freqY) * blob.ampY;
            blob.el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          });
        },
      }
    );

    return () => {
      if (animRef.current) animRef.current.kill();
      blobs.forEach((blob) => blob.el.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden noise-overlay"
      style={{ background: "#000000" }}
    >
      {/* Vignette overlay */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(0,0,0,0.4) 100%)",
        }}
      />
      {/* SVG noise filter definition */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves={3}
            stitchTiles="stitch"
          />
        </filter>
      </svg>
    </div>
  );
}
