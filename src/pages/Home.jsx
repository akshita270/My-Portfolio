import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Paragraph } from "../components/Paragraph";
import { TechStack } from "../components/TechStack";

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

      <Heading as="h2" className="font-black text-2xl md:text-3xl lg:text-3xl mt-16 mb-2">
        About Me
      </Heading>
      <div className="max-w-2xl">
        <Paragraph className="mt-4">
          I&apos;m an AI Engineer passionate about building intelligent systems powered by Large Language Models
          (LLMs), Retrieval-Augmented Generation (RAG), and agentic AI. My work focuses on developing
          production-ready AI applications that combine robust backend engineering with modern Generative AI
          to solve real-world business problems.
        </Paragraph>
        <Paragraph className="mt-4">
          Currently, I work at KareXpert, where I design and develop AI-powered solutions for the healthcare
          industry. My work includes building FastAPI backend services, developing AI-driven business
          intelligence platforms, implementing RAG-based chatbots, integrating LLMs such as Gemini and
          OpenAI, and creating intelligent analytics tools that enable users to interact with healthcare data
          using natural language.
        </Paragraph>
        <Paragraph className="mt-4">
          I completed my M.S. in Applied Data Analytics from Boston University, where I also worked as a
          Graduate Research Assistant on AI-driven healthcare research. During this time, I gained hands-on
          experience in machine learning, multi-agent systems, LLM workflows, and AI system design, further
          strengthening my passion for applied artificial intelligence.
        </Paragraph>
        <Paragraph className="mt-4">
          I&apos;m particularly interested in Generative AI, Agentic AI, RAG systems, AI orchestration, and
          healthcare AI, and I enjoy exploring new techniques to build scalable, trustworthy, and
          production-ready AI applications. My goal is to create AI systems that transform complex data into
          meaningful insights and help organisations make faster, smarter, and more informed decisions.
        </Paragraph>
      </div>

      <TechStack />
    </Container>
  );
}
