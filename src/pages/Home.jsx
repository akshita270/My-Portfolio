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
        Data Analyst with experience in healthcare analytics, data visualization, and clinical data reporting.
        Currently working at KareXpert, where I build dashboards, analyze healthcare data, and support
        data-driven decision-making across hospital operations.
      </Paragraph>

      <Heading as="h2" className="font-black text-2xl md:text-3xl lg:text-3xl mt-16 mb-2">
        About Me
      </Heading>
      <div className="max-w-2xl">
        <Paragraph className="mt-4">
          My journey started in data analytics, where I learned that great AI systems are built on top of
          reliable data, not the other way around.
        </Paragraph>
        <Paragraph className="mt-4">
          As a Data Analyst at KareXpert, I work extensively with healthcare datasets, business intelligence
          solutions, SQL-based analytics, and dashboard development. This experience has given me a deep
          understanding of healthcare workflows, clinical data, and the challenges of working with real-world
          data at scale.
        </Paragraph>
        <Paragraph className="mt-4">
          Beyond my day-to-day role, I actively build Generative AI projects focused on Retrieval-Augmented
          Generation (RAG), agentic workflows, LLM evaluation, document intelligence, and healthcare AI
          applications. My projects explore how AI can retrieve, reason over, and generate reliable responses
          from complex data sources while minimizing hallucinations.
        </Paragraph>
        <Paragraph className="mt-4">
          I earned my M.S. in Applied Data Analytics from Boston University, where I also worked as a Graduate
          Research Assistant. My research exposure and hands-on projects strengthened my interest in machine
          learning, large language models, and AI system design.
        </Paragraph>
        <Paragraph className="mt-4">
          Today, my goal is to bridge healthcare analytics and AI engineering by building intelligent systems
          that transform complex data into actionable insights.
        </Paragraph>
      </div>

      <TechStack />
    </Container>
  );
}
