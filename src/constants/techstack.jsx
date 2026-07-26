export const techStackCategories = [
  {
    label: "Languages",
    icon: "🧑‍💻",
    items: ["Python", "SQL", "JavaScript"],
  },
  {
    label: "AI / ML",
    icon: "🤖",
    items: ["LangChain", "RAG", "GPT-4o", "OpenAI API", "Agentic AI", "HuggingFace", "LoRA", "PEFT", "PyTorch", "TensorFlow", "Vector Databases", "FAISS"],
  },
  {
    label: "Backend & Infra",
    icon: "⚙️",
    items: ["FastAPI", "MongoDB", "Neo4j"],
  },
  {
    label: "Analytics & BI",
    icon: "📊",
    items: ["Tableau", "Power BI"],
  },
];

export const techStack = techStackCategories.flatMap((c) => c.items);

export const certifications = [
  { title: "Statistics for Genomic Data Science", issuer: "Johns Hopkins University", date: "Aug 2025" },
  { title: "Python for Genomic Data Science", issuer: "Johns Hopkins University", date: "Aug 2025" },
  { title: "Introduction to Genomic Technologies", issuer: "Johns Hopkins University", date: "Aug 2025" },
  { title: "Health Informatics for Healthcare Professionals", issuer: "Northeastern University", date: "Jul 2025" },
  { title: "Fundamentals of Generative AI", issuer: "Databricks", date: "Aug 2024" },
  { title: "Training in Deep Learning", issuer: "Internshala", date: "Feb 2022" },
];
