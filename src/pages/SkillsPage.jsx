import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Paragraph } from "../components/Paragraph";

const skillGroups = [
  {
    label: "Languages",
    icon: "💻",
    color: "#6366f1",
    bg: "#eef2ff",
    border: "#a5b4fc",
    skills: ["Python", "JavaScript", "SQL"],
  },
  {
    label: "GenAI & Agentic AI",
    icon: "🤖",
    color: "#0d9488",
    bg: "#f0fdfa",
    border: "#5eead4",
    skills: [
      "RAG",
      "LangChain",
      "LangGraph",
      "CrewAI",
      "Embeddings",
      "OpenAI GPT",
      "Claude (Anthropic)",
      "Hugging Face Transformers",
      "Prompt Engineering",
      "MCP",
      "Fine-Tuning (LoRA, QLoRA)",
      "LLM Evaluation",
    ],
  },
  {
    label: "Frameworks & Libraries",
    icon: "⚙️",
    color: "#8b5cf6",
    bg: "#f5f3ff",
    border: "#c4b5fd",
    skills: ["FastAPI", "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "NumPy", "Pandas"],
  },
  {
    label: "Databases & Visualization",
    icon: "🗄️",
    color: "#f59e0b",
    bg: "#fffbeb",
    border: "#fcd34d",
    skills: ["MySQL", "MongoDB", "Neo4j", "Redis", "ChromaDB", "FAISS", "Tableau", "Power BI"],
  },
  {
    label: "DevOps & Cloud",
    icon: "☁️",
    color: "#10b981",
    bg: "#ecfdf5",
    border: "#6ee7b7",
    skills: ["Linux", "Git / GitHub Actions", "Docker", "Kubernetes", "AWS"],
  },
];

export default function SkillsPage() {
  return (
    <Container>
      <span className="text-4xl">🛠️</span>
      <Heading className="font-black mb-1">Skills</Heading>
      <Paragraph className="mb-10 max-w-xl text-secondary">
        Technologies and tools I work with — from LLM APIs and agent frameworks to cloud infrastructure.
      </Paragraph>

      <div className="flex flex-col gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-2xl border overflow-hidden"
            style={{ borderColor: group.border, background: group.bg }}
          >
            {/* Header strip */}
            <div
              className="h-[3px]"
              style={{ background: `linear-gradient(90deg, ${group.color}, ${group.border})` }}
            />
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-xl">{group.icon}</span>
                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: group.color }}
                >
                  {group.label}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-medium px-3 py-1 rounded-full border bg-white text-neutral-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150 cursor-default"
                    style={{ borderColor: group.border }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
