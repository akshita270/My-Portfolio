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

function SkillCard({ group }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden flex flex-col h-full">
      <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${group.color}, ${group.border})` }} />
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">{group.icon}</span>
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: group.color }}>
            {group.label}
          </p>
        </div>
        <ul className="flex flex-col gap-2">
          {group.skills.map((skill) => (
            <li key={skill} className="flex items-start gap-2 text-sm text-neutral-700">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: group.color }} />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <Container>
      <span className="text-4xl">🛠️</span>
      <Heading className="font-black mb-1">Skills</Heading>
      <Paragraph className="mb-10 max-w-xl text-secondary">
        Technologies and tools I work with — from LLM APIs and agent frameworks to cloud infrastructure.
      </Paragraph>

      {/* First row — 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
        {skillGroups.slice(0, 3).map((group) => (
          <SkillCard key={group.label} group={group} />
        ))}
      </div>

      {/* Second row — 2 cards centred */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:max-w-[66%] mx-auto">
        {skillGroups.slice(3).map((group) => (
          <SkillCard key={group.label} group={group} />
        ))}
      </div>
    </Container>
  );
}
