import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Paragraph } from "../components/Paragraph";

const articles = [
  {
    title: "I Built SehatRx, an AI Prescription App for Indian Clinics — The AI Was the Easy Part",
    description:
      "How I built a full-stack AI prescription platform for Indian clinics — covering ASR transcription, ICD-10 NER, GPT-4o prescription drafting, and the hard non-technical lessons about deploying AI in real healthcare settings.",
    href: "https://medium.com/@jakshita770/i-built-sehatrx-an-ai-prescription-app-for-indian-clinics-the-ai-was-the-easy-part-c097417b0d35",
    icon: "🏥",
    tags: ["Healthcare AI", "RAG", "NLP", "Production"],
  },
  {
    title: "Does Retrieval Strategy Determine Hallucination? A Controlled Comparison of Four RAG Architectures",
    description:
      "A structured research experiment comparing four RAG architectures — Vanilla, HyDE, GraphRAG, and Agentic RAG — on their ability to reduce hallucinations when answering questions about AI/ML research papers from ArXiv.",
    href: "https://tinyurl.com/3jyjvhaz",
    icon: "📚",
    tags: ["RAG", "LLMs", "Hallucination", "Research"],
  },
  {
    title: "How I Built a 7-Agent AI Pipeline That Generates a Startup Blueprint in Minutes",
    description:
      "A deep dive into building Startup Copilot — a 7-agent pipeline covering idea generation, market research, competitor analysis, revenue modeling, MVP planning, and an investor-ready pitch deck, fully automated.",
    href: "https://akshitajain.hashnode.dev/how-i-built-a-7-agent-ai-pipeline-that-generates-a-startup-blueprint-in-minutes",
    icon: "🚀",
    tags: ["Multi-Agent", "AI Pipeline", "Startup", "LLMs"],
  },
];

export default function ArticlesPage() {
  return (
    <Container>
      <span className="text-4xl">✍️</span>
      <Heading className="font-black mb-2">Articles</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Writing about AI engineering, multi-agent systems, and lessons learned building production RAG pipelines.
      </Paragraph>

      <div className="flex flex-col gap-5">
        {articles.map((article) => (
          <a
            key={article.href}
            href={article.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-700 overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)" }}
          >
            {/* accent bar */}
            <div className="h-[3px] w-full bg-gradient-to-r from-sky-500 via-violet-500 to-indigo-500" />

            <div className="p-6 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="text-3xl flex-shrink-0">{article.icon}</span>
                <h3 className="font-semibold text-white text-base leading-snug group-hover:text-sky-300 transition-colors">
                  {article.title}
                </h3>
              </div>

              <p className="text-white/70 text-sm leading-relaxed">{article.description}</p>

              <div className="flex items-center justify-between flex-wrap gap-3 pt-2 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-white/80 hover:bg-white/20 transition cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-sky-400 border border-sky-500/40 px-3 py-1 rounded-full hover:bg-sky-500/10 transition">
                  Read article
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                    <path d="M5 12l14 0"></path>
                    <path d="M13 18l6 -6"></path>
                    <path d="M13 6l6 6"></path>
                  </svg>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Container>
  );
}
