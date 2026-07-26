import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Paragraph } from "../components/Paragraph";
import { TechStack } from "../components/TechStack";
import { FadeIn } from "../components/FadeIn";
import { useTypewriter } from "../hooks/useTypewriter";

const skills = ["RAG", "LLMs", "FastAPI", "Python", "Agentic AI", "Healthcare AI"];

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
  const { displayed, done } = useTypewriter("Hello there! I'm Akshita", 55, 300);

  return (
    <Container>
      <motion.span
        className="text-4xl inline-block"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        👋
      </motion.span>

      {/* Hero: text + photo */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mt-2">
        <div className="flex-1">
          <Heading className="font-black min-h-[1.2em]">
            {displayed}
            {!done && (
              <span className="inline-block w-[2px] h-[1em] bg-current align-middle ml-0.5 animate-pulse" />
            )}
          </Heading>

          {/* KareXpert live indicator */}
          <FadeIn delay={0.05}>
            <div className="flex items-center gap-2 mt-3 mb-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm text-secondary">Currently at <span className="font-semibold text-primary">KareXpert</span></span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Paragraph className="max-w-xl mt-3">
              AI Engineer with expertise in Generative AI, LLM applications, and healthcare analytics. Experienced
              in building production-ready AI solutions including RAG systems, AI-powered analytics assistants,
              FastAPI backend services, and intelligent dashboard platforms. Passionate about developing scalable
              AI products that transform complex healthcare data into actionable insights through machine learning,
              automation, and modern AI technologies.
            </Paragraph>
          </FadeIn>

          {/* Animated skill badges */}
          <FadeIn delay={0.15}>
            <div className="flex flex-wrap gap-2 mt-5">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.3 }}
                  className="text-xs font-medium px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-white hover:border-neutral-400 hover:shadow-sm transition cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Profile photo */}
        <FadeIn delay={0.2}>
          <div className="flex-shrink-0 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500 via-violet-500 to-indigo-500 blur-md opacity-30 scale-105" />
              <img
                src="/images/akshita-profile.jpg"
                alt="Akshita Jain"
                className="relative w-48 h-56 md:w-52 md:h-60 object-cover object-top rounded-2xl shadow-xl border border-neutral-200"
              />
            </div>
          </div>
        </FadeIn>
      </div>

      {/* About Me */}
      <FadeIn delay={0} className="mt-16">
        <Heading as="h2" className="font-black text-2xl md:text-3xl lg:text-3xl mb-4">
          About Me
        </Heading>
      </FadeIn>

      <FadeIn delay={0.05}>
        {/* Animated gradient border wrapper */}
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
            <div className="p-6 md:p-8 flex flex-col gap-5">
              <div className="flex flex-col gap-4 text-sm text-white/80 leading-relaxed">
                <p>
                  I&apos;m an AI Engineer passionate about building intelligent systems powered by Large Language Models
                  (LLMs), Retrieval-Augmented Generation (RAG), and agentic AI. My work focuses on developing
                  production-ready AI applications that combine robust backend engineering with modern Generative AI
                  to solve real-world business problems.
                </p>
                <p>
                  Currently, I work at <span className="font-semibold text-white">KareXpert</span>, where I design and develop AI-powered solutions for the healthcare
                  industry — building FastAPI backend services, AI-driven business intelligence platforms, RAG-based
                  chatbots, and intelligent analytics tools that enable users to interact with healthcare data using
                  natural language.
                </p>
                <p>
                  I completed my <span className="font-semibold text-white">M.S. in Applied Data Analytics</span> from Boston University, where I also worked as a
                  Graduate Research Assistant on AI-driven healthcare research, gaining hands-on experience in
                  machine learning, multi-agent systems, LLM workflows, and AI system design.
                </p>
                <p>
                  My goal is to create AI systems that transform complex data into meaningful insights and help
                  organisations make faster, smarter, and more informed decisions.
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
