import { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

function DifferentiatorsCard({ items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6">
      {!open ? (
        /* Closed state — single card */
        <button
          onClick={() => setOpen(true)}
          className="w-full text-left rounded-2xl overflow-hidden cursor-pointer group transition-all duration-200 hover:scale-[1.01] hover:shadow-xl"
          style={{ background: "linear-gradient(135deg, #0c1a2e 0%, #0f3460 60%, #0c1a2e 100%)" }}
        >
          <div className="h-[3px]" style={{ background: "linear-gradient(90deg, #0d9488, #38bdf8)" }} />
          <div className="p-6 md:p-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✨</span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-1">Click to reveal</p>
                <p className="text-lg font-bold text-white">Why SehatRx?</p>
              </div>
            </div>
            <span className="text-teal-400 text-2xl group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </button>
      ) : (
        /* Open state — 3 flash cards side by side */
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-base">✨</span>
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">Why SehatRx?</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-xs text-neutral-400 hover:text-neutral-600 transition px-2 py-1 rounded hover:bg-neutral-100"
            >
              ✕ collapse
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {items.map((d, i) => (
              <div
                key={d.title}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background: i === 0
                    ? "linear-gradient(160deg, #0c1a2e, #0f3460)"
                    : i === 1
                    ? "linear-gradient(160deg, #0f2027, #0d9488aa, #0c1a2e)"
                    : "linear-gradient(160deg, #0c1a2e, #1e3a5f)",
                }}
              >
                <div className="h-[3px]" style={{ background: "linear-gradient(90deg, #0d9488, #38bdf8)" }} />
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <span className="text-2xl">{d.icon}</span>
                  <p className="text-sm font-semibold text-teal-200 leading-snug">{d.title}</p>
                  <p className="text-xs text-teal-100/65 leading-relaxed">{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function CaseStudy({ cs, color }) {
  const cards = [
    {
      icon: "🎯",
      label: "The Problem",
      content: cs.problem,
      bg: "linear-gradient(145deg, #1c0808, #2d1010)",
      accent: "#f87171",
      border: "rgba(248,113,113,0.25)",
    },
    {
      icon: "💡",
      label: "The Solution",
      content: cs.solution,
      bg: "linear-gradient(145deg, #080d1c, #0f1629)",
      accent: color,
      border: `${color}40`,
    },
    {
      icon: "🤖",
      label: "Why AI?",
      content: cs.whyAI,
      bg: "linear-gradient(145deg, #1a1100, #2b1d00)",
      accent: "#fbbf24",
      border: "rgba(251,191,36,0.25)",
    },
  ];

  return (
    <div className="mt-10">
      {/* Deep Dive header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.35))" }} />
        <div
          className="px-4 py-1 rounded-full"
          style={{ background: "rgba(109,40,217,0.12)", border: "1px solid rgba(139,92,246,0.3)" }}
        >
          <span
            className="text-[10px] font-black tracking-[0.22em]"
            style={{ color: "#c4b5fd", textTransform: "uppercase" }}
          >
            Deep Dive
          </span>
        </div>
        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(139,92,246,0.35), transparent)" }} />
      </div>

      {/* Problem / Solution / Why AI — 3-col dark cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
        {cards.map((c) => (
          <div
            key={c.label}
            className="rounded-2xl overflow-hidden flex flex-col"
            style={{ background: c.bg, border: `1px solid ${c.border}` }}
          >
            <div className="h-[2px]" style={{ background: `linear-gradient(90deg, ${c.accent}, transparent)` }} />
            <div className="p-5 flex flex-col gap-3 flex-1">
              <span className="text-2xl leading-none">{c.icon}</span>
              <p
                className="text-[10px] font-black tracking-[0.18em]"
                style={{ color: c.accent, textTransform: "uppercase" }}
              >
                {c.label}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                {c.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tradeoffs */}
      {cs.tradeoffs?.length > 0 && (
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #0c0a18, #120f22)",
            border: "1px solid rgba(139,92,246,0.22)",
          }}
        >
          <div className="h-[2px]" style={{ background: "linear-gradient(90deg, #818cf8, #c084fc, transparent)" }} />
          <div className="p-5 md:p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xl leading-none">⚖️</span>
              <p
                className="text-[10px] font-black tracking-[0.18em]"
                style={{ color: "#a78bfa", textTransform: "uppercase" }}
              >
                Tradeoffs
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {cs.tradeoffs.map((t, i) => (
                <div key={t.title} className="flex flex-col gap-2">
                  <div className="flex items-start gap-2.5">
                    <span
                      className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0"
                      style={{ background: "#5b21b6", color: "#ede9fe" }}
                    >
                      {i + 1}
                    </span>
                    <p className="text-sm font-semibold leading-snug" style={{ color: "#e2e8f0" }}>
                      {t.title}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed pl-[30px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {t.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
    <path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" />
  </svg>
);

export const SingleProduct = ({ product }) => {
  return (
    <div className="py-10 max-w-3xl">
      {/* Title + stack */}
      <div className="mt-8">
        <Heading className="font-black mb-3">{product.title}</Heading>
        <div className="flex flex-wrap gap-2 mb-5">
          {product.stack?.map((s) => (
            <span key={s} className="text-xs font-medium px-2.5 py-1 rounded-full border-2 border-neutral-300 bg-neutral-50 hover:bg-white hover:border-neutral-500 text-neutral-600 transition cursor-default">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Differentiators / USP — flip-open flash cards */}
      {product.differentiators?.length > 0 && (
        <DifferentiatorsCard items={product.differentiators} />
      )}

      {/* Case Study — Problem / Solution / Tradeoffs / Why AI */}
      {product.caseStudy && (
        <CaseStudy cs={product.caseStudy} color={product.color} />
      )}

      {/* Links */}
      <div className="flex flex-wrap gap-3 mt-8">
        {product.href && (
          <a href={product.href} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 group/button rounded-full hover:scale-105 focus:outline-none transition bg-white border border-neutral-300 text-neutral-800 hover:shadow-md text-sm font-semibold px-5 py-2.5">
            View on GitHub <ArrowIcon />
          </a>
        )}
        {product.live && (
          <a href={product.live} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 group/button rounded-full hover:scale-105 focus:outline-none transition text-white text-sm font-semibold px-5 py-2.5"
            style={{ background: product.color }}>
            Live Demo <ArrowIcon />
          </a>
        )}
        {product.blog && (
          <a href={product.blog} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 group/button rounded-full hover:scale-105 focus:outline-none transition bg-white border border-neutral-300 text-neutral-800 hover:shadow-md text-sm font-semibold px-5 py-2.5">
            Read Article <ArrowIcon />
          </a>
        )}
        {product.deck && (
          <a href={product.deck} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 group/button rounded-full hover:scale-105 focus:outline-none transition bg-white border border-neutral-300 text-neutral-800 hover:shadow-md text-sm font-semibold px-5 py-2.5">
            📊 View Deck <ArrowIcon />
          </a>
        )}
      </div>
    </div>
  );
};
