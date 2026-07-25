import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Paragraph } from "../components/Paragraph";
import { TechStack } from "../components/TechStack";
import { FadeIn } from "../components/FadeIn";
import { useTypewriter } from "../hooks/useTypewriter";

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
      {/* spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: pos.visible ? 1 : 0,
          background: `radial-gradient(350px circle at ${pos.x}px ${pos.y}px, rgba(139,92,246,0.15), transparent 70%)`,
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

      {/* Typewriter heading */}
      <Heading className="font-black min-h-[1.2em]">
        {displayed}
        {!done && (
          <span className="inline-block w-[2px] h-[1em] bg-current align-middle ml-0.5 animate-pulse" />
        )}
      </Heading>

      <FadeIn delay={0.1}>
        <Paragraph className="max-w-xl mt-4">
          AI Engineer with expertise in Generative AI, LLM applications, and healthcare analytics. Experienced
          in building production-ready AI solutions including RAG systems, AI-powered analytics assistants,
          FastAPI backend services, and intelligent dashboard platforms. Passionate about developing scalable
          AI products that transform complex healthcare data into actionable insights through machine learning,
          automation, and modern AI technologies.
        </Paragraph>
      </FadeIn>

      <FadeIn delay={0} className="mt-16">
        <Heading as="h2" className="font-black text-2xl md:text-3xl lg:text-3xl mb-4">
          About Me
        </Heading>
      </FadeIn>

      <FadeIn delay={0.05}>
        <SpotlightCard
          className="max-w-2xl rounded-2xl border border-slate-700 shadow-xl"
          style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)" }}
        >
          <div className="h-[3px] w-full bg-gradient-to-r from-sky-500 via-violet-500 to-indigo-500" />
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
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs text-white/40 italic">
                &quot;Great AI systems are built on top of reliable data — not the other way around.&quot;
              </p>
            </div>
          </div>
        </SpotlightCard>
      </FadeIn>

      <FadeIn delay={0}>
        <TechStack />
      </FadeIn>
    </Container>
  );
}
