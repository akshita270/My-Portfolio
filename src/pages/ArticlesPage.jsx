import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Paragraph } from "../components/Paragraph";

const articles = [
  {
    title: "Does Retrieval Strategy Determine Hallucination? A Controlled Comparison of Four RAG Architectures",
    description:
      "A structured research experiment comparing four RAG architectures — Vanilla, HyDE, GraphRAG, and Agentic RAG — on their ability to reduce hallucinations when answering questions about AI/ML research papers from ArXiv.",
    href: "https://tinyurl.com/3jyjvhaz",
    icon: "📚",
    color: "#10b981",
    tags: ["RAG", "LLMs", "Hallucination", "Research"],
  },
  {
    title: "How I Built a 7-Agent AI Pipeline That Generates a Startup Blueprint in Minutes",
    description:
      "A deep dive into building Startup Copilot — a 7-agent pipeline covering idea generation, market research, competitor analysis, revenue modeling, MVP planning, and an investor-ready pitch deck, fully automated.",
    href: "https://akshitajain.hashnode.dev/how-i-built-a-7-agent-ai-pipeline-that-generates-a-startup-blueprint-in-minutes",
    icon: "🚀",
    color: "#8b5cf6",
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

      <div className="flex flex-col divide-y divide-neutral-100">
        {articles.map((article) => (
          <a
            key={article.href}
            href={article.href}
            target="_blank"
            rel="noreferrer"
            className="group py-6 first:pt-0"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl mt-0.5 flex-shrink-0">{article.icon}</span>
              <div>
                <h3 className="font-semibold text-primary text-base leading-snug group-hover:text-sky-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-secondary text-sm mt-2 leading-relaxed max-w-xl">{article.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {article.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-50 hover:bg-white hover:shadow-sm hover:text-primary border border-transparent hover:border-neutral-200 px-2 py-1 rounded-sm text-secondary transition cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm mt-3 text-sky-600 font-medium border border-sky-200 px-3 py-1 rounded-full hover:bg-sky-50 hover:shadow-sm transition">
                  Read article
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
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
