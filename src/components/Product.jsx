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
        <div className="rounded-2xl bg-white border border-neutral-200 overflow-hidden flex flex-col">
          <div className="h-1 bg-rose-500" />
          <div className="p-6 flex flex-col gap-3">
            <span className="inline-flex w-fit text-[11px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-200">
              The Problem
            </span>
            <p className="text-2xl font-black text-neutral-900 leading-snug">{cs.problemHeadline || cs.problem}</p>
            {cs.problemHeadline && (
              <p className="text-sm text-neutral-500 leading-relaxed">{cs.problem}</p>
            )}
          </div>
        </div>

        {/* Solution */}
        <div className="rounded-2xl bg-white border border-neutral-200 overflow-hidden flex flex-col">
          <div className="h-1" style={{ background: color }} />
          <div className="p-6 flex flex-col gap-3">
            <span
              className="inline-flex w-fit text-[11px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full border"
              style={{ background: `${color}10`, color, borderColor: `${color}30` }}
            >
              The Solution
            </span>
            <p className="text-2xl font-black text-neutral-900 leading-snug">
              {cs.solutionHeadline || cs.solution}
            </p>
            {cs.solutionHeadline && (
              <p className="text-sm text-neutral-500 leading-relaxed">{cs.solution}</p>
            )}
          </div>
        </div>
      </div>

      {/* Why AI — full-width spotlight */}
      <div
        className="rounded-2xl mb-3 overflow-hidden"
        style={{ background: "linear-gradient(120deg, #0f0c29, #302b63, #24243e)" }}
      >
        <div className="px-6 py-5">
          <span className="text-sm font-black tracking-widest text-indigo-400 uppercase">Why AI?</span>
          <p className="text-xl font-black text-white mt-1.5 mb-2 leading-snug">
            {cs.whyAIHeadline || cs.whyAI}
          </p>
          {cs.whyAIHeadline && (
            <p className="text-sm text-indigo-200/60 leading-relaxed">{cs.whyAI}</p>
          )}
        </div>
      </div>

      {/* Results — dashboard */}
      {cs.results?.length > 0 && (() => {
        const colors = ["#34d399", "#38bdf8", "#fb923c", "#a78bfa"];
        return (
          <div className="rounded-2xl mb-3 overflow-hidden" style={{ background: "linear-gradient(135deg, #0d1117 0%, #161b22 60%, #0d1117 100%)" }}>
            <div className="px-6 pt-5 pb-2 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-black tracking-[0.2em] text-emerald-400 uppercase">Live Results</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 px-3 pb-4 gap-2">
              {cs.results.map((r, i) => (
                <div key={r.label} className="rounded-xl px-4 py-4 flex flex-col gap-1" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${colors[i % colors.length]}22` }}>
                  <span className="text-2xl font-black leading-none" style={{ color: colors[i % colors.length] }}>{r.value}</span>
                  <span className="text-[11px] font-bold text-white/80 mt-1 leading-snug">{r.label}</span>
                  <span className="text-[10px] leading-snug" style={{ color: `${colors[i % colors.length]}99` }}>{r.sub}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })()}

      {/* Tradeoffs — chosen vs alternative */}
      {cs.tradeoffs?.length > 0 && (
        <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden">
          <div className="h-1 bg-violet-500" />
          <div className="px-5 pt-4 pb-1">
            <span className="inline-flex w-fit text-[11px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full bg-violet-50 text-violet-600 border border-violet-200">
              Engineering Tradeoffs
            </span>
          </div>
          <div className="divide-y divide-neutral-100">
            {cs.tradeoffs.map((t) => {
              const parts = t.title.split(/ vs\.? /i);
              const chosen = parts[0]?.trim();
              const alternative = parts.slice(1).join(" vs ").trim();
              return (
                <div key={t.title} className="px-5 py-4 flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="text-emerald-500 font-black">✓</span> {chosen}
                    </span>
                    <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">vs</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-neutral-100 text-neutral-500 border border-neutral-200">
                      <span className="text-neutral-400 font-black">✕</span> {alternative}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 leading-relaxed">{t.body}</p>
                </div>
              );
            })}
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
