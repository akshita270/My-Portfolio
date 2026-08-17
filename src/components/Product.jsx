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
  return (
    <div className="mt-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="h-px flex-1 bg-neutral-200" />
        <span className="text-[10px] font-black tracking-[0.22em] text-neutral-400 uppercase px-1">Case Study</span>
        <div className="h-px flex-1 bg-neutral-200" />
      </div>

      {/* Problem + Solution — side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        {/* Problem */}
        <div className="rounded-2xl bg-rose-50 border border-rose-100 p-5 flex flex-col gap-2">
          <span className="text-[10px] font-black tracking-[0.18em] text-rose-400 uppercase">The Problem</span>
          <p className="text-base font-bold text-rose-900 leading-snug">{cs.problemHeadline || cs.problem}</p>
          {cs.problemHeadline && (
            <p className="text-sm text-rose-700/70 leading-relaxed">{cs.problem}</p>
          )}
        </div>

        {/* Solution */}
        <div
          className="rounded-2xl border p-5 flex flex-col gap-2"
          style={{ background: `${color}0d`, borderColor: `${color}25` }}
        >
          <span
            className="text-[10px] font-black tracking-[0.18em] uppercase"
            style={{ color }}
          >
            The Solution
          </span>
          <p className="text-base font-bold leading-snug" style={{ color }}>
            {cs.solutionHeadline || cs.solution}
          </p>
          {cs.solutionHeadline && (
            <p className="text-sm leading-relaxed" style={{ color: `${color}99` }}>{cs.solution}</p>
          )}
        </div>
      </div>

      {/* Why AI — full-width spotlight */}
      <div
        className="rounded-2xl mb-3 overflow-hidden"
        style={{ background: "linear-gradient(120deg, #0f0c29, #302b63, #24243e)" }}
      >
        <div className="px-6 py-5">
          <span className="text-[10px] font-black tracking-[0.22em] text-indigo-400 uppercase">Why AI?</span>
          <p className="text-lg font-bold text-white mt-1.5 mb-2 leading-snug">
            {cs.whyAIHeadline || cs.whyAI}
          </p>
          {cs.whyAIHeadline && (
            <p className="text-sm text-indigo-200/60 leading-relaxed">{cs.whyAI}</p>
          )}
        </div>
      </div>

      {/* Tradeoffs — compact list */}
      {cs.tradeoffs?.length > 0 && (
        <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden">
          <div className="px-5 pt-4 pb-1">
            <span className="text-[10px] font-black tracking-[0.22em] text-neutral-400 uppercase">Engineering Tradeoffs</span>
          </div>
          <div className="divide-y divide-neutral-100">
            {cs.tradeoffs.map((t, i) => (
              <div key={t.title} className="flex gap-4 px-5 py-3.5">
                <span className="text-[11px] font-black text-violet-400 mt-0.5 flex-shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm font-semibold text-neutral-800 leading-snug">{t.title}</p>
                  <p className="text-xs text-neutral-500 leading-relaxed mt-0.5">{t.body}</p>
                </div>
              </div>
            ))}
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
