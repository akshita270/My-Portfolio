import { useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
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
  const FULL_TEXT = "Hello, I'm Akshita";
  const { displayed, done } = useTypewriter(FULL_TEXT, 55, 300);

  return (
    <Container>
      <span className="text-4xl inline-block">👋</span>

      {/* Hero */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mt-2">
        <div className="flex-1">
          <div style={{ minHeight: "3.5rem" }}>
            <Heading className="font-black">
              {displayed}
              {!done && (
                <span className="inline-block w-[2px] h-[0.85em] bg-current align-middle ml-0.5 animate-pulse" />
              )}
            </Heading>
          </div>

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
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              View My Work <span className="text-base">→</span>
            </Link>
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
                  I&apos;m an AI Engineer driven by curiosity — the kind that makes me want to understand how a new AI technology works, experiment with it, break it, and eventually find a way to build something useful with it.
                </p>
                <p>
                  My interests span <span className="text-white font-semibold">LLMs, RAG, agentic AI, multi-agent systems, LLM evaluation, and AI application engineering</span>. I enjoy exploring new models, frameworks, architectures, and developer tools, but I&apos;m equally interested in what happens beyond the model — retrieval quality, orchestration, latency, scalability, evaluation, reliability, and the engineering required to make AI actually work in production.
                </p>
                <p>
                  At <span className="text-white font-semibold">KareXpert</span>, I&apos;ve worked on AI-powered analytics and healthcare applications, building systems that combine LLMs with real-world data and backend infrastructure. I&apos;ve built RAG-based applications, AI-driven BI tools, natural-language analytics, and intelligent workflows designed to solve problems that traditional software alone couldn&apos;t easily address.
                </p>
                <p>
                  My M.S. in Applied Data Analytics from Boston University gave me a strong foundation in data, machine learning, and experimentation, while my research experience pushed me deeper into <span className="text-white font-semibold">LLM evaluation, retrieval architectures, and agentic workflows</span>.
                </p>
                <p>
                  What excites me most about AI is how quickly the field evolves. There is always a new model, framework, technique, or idea worth understanding. I enjoy staying close to that evolution — not just following what&apos;s new, but <span className="text-white font-semibold">building with it, questioning it, and figuring out where it can create real value</span>.
                </p>
                <p>
                  For me, the goal isn&apos;t to build AI demos. It&apos;s to build systems that are <span className="text-white font-semibold">useful, reliable, fast, and actually used</span>.
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
