import { Paragraph } from "./Paragraph";

export default function About() {
  return (
    <div>
      <div className="max-w-4xl mt-6">
        <Paragraph className="mt-4">
          I'm a Data Analyst building AI solutions for healthcare — with a Master's in Applied Data Analytics
          from Boston University and hands-on experience turning complex clinical data into systems that
          actually work at scale.
        </Paragraph>
        <Paragraph className="mt-4">
          At KareXpert, I design RAG-based retrieval systems, medical transcription pipelines, and NLP workflows
          for ICD-10 extraction and clinical note structuring — all shipping to real hospital systems, processing
          100+ encounters every day.
        </Paragraph>
        <Paragraph className="mt-4">
          Outside of work, I push that further — a 7-agent startup copilot, a 9-agent genomic intelligence
          pipeline, hallucination-free validation systems. I believe data analysis is only as powerful as the
          AI layer built on top of it.
        </Paragraph>
        <Paragraph className="mt-4">
          I hold an M.S. in Applied Data Analytics from Boston University, where I also worked as a Graduate
          Research Assistant in the Faculty of Computing & Data Sciences — early exposure that shaped my focus
          on LLMs and retrieval-based systems.
        </Paragraph>
        <Paragraph className="mt-4">
          Thanks for stopping by. Whether you're here about a role, a collaboration, or just curious about one
          of the projects, feel free to reach out — I'd love to talk.
        </Paragraph>
      </div>
    </div>
  );
}
