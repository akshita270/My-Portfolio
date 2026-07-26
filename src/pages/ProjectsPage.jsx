import { useState } from "react";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Paragraph } from "../components/Paragraph";
import { Products } from "../components/Products";
import { FadeIn } from "../components/FadeIn";
import { products } from "../constants/products";

const tabs = ["All", "AI Systems", "Research", "Featured"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered = products.filter((p) => {
    if (active === "All") return true;
    if (active === "Research") return p.research;
    if (active === "Featured") return p.featured;
    if (active === "AI Systems") return !p.research;
    return true;
  });

  return (
    <Container>
      <span className="text-4xl">🧠</span>
      <Heading className="font-black mb-2">Projects</Heading>
      <Paragraph className="mb-8 max-w-xl">
        Multi-agent pipelines, genomic AI, healthcare NLP — projects that push the boundaries of what AI can do.
      </Paragraph>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-all duration-200 ${
              active === tab
                ? "bg-neutral-900 text-white border-neutral-900"
                : "bg-white text-secondary border-neutral-200 hover:border-neutral-400 hover:text-primary"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <FadeIn key={active}>
        <Products items={filtered} />
      </FadeIn>
    </Container>
  );
}
