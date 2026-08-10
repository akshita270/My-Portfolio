import { useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Paragraph } from "../components/Paragraph";
import { TechStack } from "../components/TechStack";
import { FadeIn } from "../components/FadeIn";
import { useTypewriter } from "../hooks/useTypewriter";

const stats = [
  { value: "10+", label: "Projects Built", icon: "🚀" },
  { value: "2", label: "Publications", icon: "📝" },
  { value: "1+", label: "Years at Scale", icon: "⚡" },
  { value: "MS", label: "Boston University", icon: "🎓" },
];

function SpotlightCard({ children, className = "", style = {} }) {
  const cardRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = useCallback((e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPos((p) => ({ ...p, visible: false }));
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: pos.visible ? 1 : 0,
          background: `radial-gradient(350px circle at ${pos.x}px ${pos.y}px, rgba(139,92,246,0.18), transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}

export default function Home() {
  const { displayed, done } = useTypewriter("Hello, I'm Akshita", 55, 300);

  return (
    <Container>
      <span className="text-4xl inline-block">👋</span>

      {/* Hero */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mt-2">
        <div className="flex-1">
          <Heading className="font-black min-h-[1.2em]">
            {displayed}
            {!done && (
              <span className="inline-block w-[2px] h-[1em] bg-current align-middle ml-0.5 animate-pulse" />
            )}
          </Heading>

          {/* Live indicator */}
          <FadeIn delay={0.05}>
            <div className="flex items-center gap-2 mt-3 mb-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm text-secondary">
                AI Engineer at{" "}
                <span className="font-semibold text-primary">KareXpert</span>
                {" "}· Open to exciting AI roles
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Paragraph className="max-w-xl mt-3 leading-relaxed">
              I build production AI systems — RAG pipelines, multi-agent workflows, LLM-powered analytics tools —
              that ship to real users. Currently at KareXpert replacing Microsoft Power BI with an AI BI platform
              that saves ₹70K–80K/month in licensing.
            </Paragraph>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.15}>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Profile photo */}
        <FadeIn delay={0.2}>
          <div className="flex-shrink-0 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-sky-400 via-violet-500 to-indigo-500 blur-xl opacity-40 scale-105" />
              <img
                src="/images/akshita-profile.jpg"
                alt="Akshita Jain"
                className="relative w-48 h-56 md:w-52 md:h-60 object-cover object-top rounded-2xl shadow-2xl border-2 border-white/80"
              />
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Stats bar */}
      <FadeIn delay={0.25}>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group flex flex-col items-center justify-center py-5 rounded-2xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 hover:border-neutral-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
            >
              <span className="text-xl mb-1">{stat.icon}</span>
              <span className="text-2xl font-black text-neutral-900">{stat.value}</span>
              <span className="text-xs text-neutral-500 mt-0.5 font-medium text-center px-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* About Me */}
      <FadeIn delay={0} className="mt-16">
        <Heading as="h2" className="font-black text-2xl md:text-3xl lg:text-3xl mb-4">
          About Me
        </Heading>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="relative max-w-2xl p-[2px] rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "conic-gradient(from 0deg, #38bdf8, #818cf8, #a78bfa, #6366f1, #38bdf8)",
              animation: "spin 4s linear infinite",
            }}
          />
          <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>

          <SpotlightCard
            className="relative rounded-2xl overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)" }}
          >
            <div className="p-6 md:p-8 flex flex-col gap-4">
              <div className="flex flex-col gap-3.5 text-sm text-white/80 leading-relaxed">
                <p>
                  I&apos;m an AI Engineer who builds things that ship — not demos. My work spans{" "}
                  <span className="text-white font-semibold">RAG systems</span>,{" "}
                  <span className="text-white font-semibold">multi-agent pipelines</span>, and{" "}
                  <span className="text-white font-semibold">LLM-powered analytics</span>{" "}
                  for healthcare, where the stakes are real.
                </p>
                <p>
                  At <span className="font-semibold text-white">KareXpert</span>, I designed an AI BI platform
                  that eliminated our Microsoft Power BI dependency — saving ₹70K–80K/month — and built a
                  RAG chatbot that answers natural-language queries over live project data.
                </p>
                <p>
                  Before that, I completed my{" "}
                  <span className="font-semibold text-white">M.S. in Applied Data Analytics at Boston University</span>{" "}
                  and worked as a Graduate Research Assistant in the CS department, where I got deep on
                  LLM evaluation, agentic systems, and retrieval architectures.
                </p>
                <p>
                  I care about the last mile: systems that are fast, trustworthy, and actually used.
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </FadeIn>

      <FadeIn delay={0}>
        <TechStack />
      </FadeIn>
    </Container>
  );
}
