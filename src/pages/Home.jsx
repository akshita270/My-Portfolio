import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Paragraph } from "../components/Paragraph";
import { TechStack } from "../components/TechStack";

const highlights = [
  { icon: "🤖", label: "Generative AI & LLMs" },
  { icon: "🔍", label: "RAG Systems" },
  { icon: "🏥", label: "Healthcare AI" },
  { icon: "⚡", label: "Agentic Workflows" },
];

export default function Home() {
  return (
    <Container>
      <motion.span
        className="text-4xl inline-block"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15, duration: 0.6 }}
      >
        👋
      </motion.span>
      <Heading className="font-black">Hello there! I&apos;m Akshita</Heading>
      <Paragraph className="max-w-xl mt-4">
        AI Engineer with expertise in Generative AI, LLM applications, and healthcare analytics. Experienced
        in building production-ready AI solutions including RAG systems, AI-powered analytics assistants,
        FastAPI backend services, and intelligent dashboard platforms. Passionate about developing scalable
        AI products that transform complex healthcare data into actionable insights through machine learning,
        automation, and modern AI technologies.
      </Paragraph>

      <Heading as="h2" className="font-black text-2xl md:text-3xl lg:text-3xl mt-16 mb-4">
        About Me
      </Heading>

      {/* Premium About Me card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-2xl rounded-2xl border border-slate-700 overflow-hidden shadow-xl"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)" }}
      >
        {/* top accent bar */}
        <div className="h-[3px] w-full bg-gradient-to-r from-sky-500 via-violet-500 to-indigo-500" />

        <div className="p-6 md:p-8 flex flex-col gap-5">
          {/* paragraphs */}
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

          {/* divider + tagline */}
          <div className="pt-4 border-t border-white/10">
            <p className="text-xs text-white/40 italic">
              "Great AI systems are built on top of reliable data — not the other way around."
            </p>
          </div>
        </div>
      </motion.div>

      <TechStack />
    </Container>
  );
}
