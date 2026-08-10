import { useState } from "react";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Paragraph } from "../components/Paragraph";
import { Products } from "../components/Products";
import { FadeIn } from "../components/FadeIn";
import { products } from "../constants/products";

const tabs = ["All", "Featured", "AI Systems", "Research"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const mainProjects = products.filter((p) => !p.research);
  const researchProjects = products.filter((p) => p.research);

  const filteredMain = mainProjects.filter((p) => {
    if (active === "All" || active === "AI Systems") return true;
    if (active === "Featured") return p.featured;
    return false;
  });

  const filteredResearch = researchProjects.filter((p) => {
    if (active === "All" || active === "Research") return true;
    if (active === "Featured") return p.featured;
    return false;
  });

  const showMain = active !== "Research" && filteredMain.length > 0;
  const showResearch = active !== "AI Systems" && filteredResearch.length > 0;

  return (
    <Container>
      <span className="text-4xl">🧠</span>
      <Heading className="font-black mb-1">Projects</Heading>
      <Paragraph className="mb-8 max-w-xl text-secondary">
        Production AI systems, research experiments, and open-source tools — all shipped.
      </Paragraph>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`text-sm font-semibold px-4 py-1.5 rounded-full border transition-all duration-200 ${
              active === tab
                ? "bg-neutral-900 text-white border-neutral-900 shadow-md"
                : "bg-white text-secondary border-neutral-200 hover:border-neutral-400 hover:text-primary hover:shadow-sm"
            }`}
          >
            {tab}
          </button>
        ))}
        <span className="ml-auto text-xs text-neutral-400 flex items-center">
          {filteredMain.length + filteredResearch.length} projects
        </span>
      </div>

      {showMain && (
        <FadeIn key={`main-${active}`}>
          <Products items={filteredMain} />
        </FadeIn>
      )}

      {showResearch && (
        <FadeIn key={`research-${active}`} className="mt-16">
          <div className="flex items-center gap-3 mb-2">
            <Heading as="h2" className="font-black text-2xl md:text-3xl lg:text-3xl">
              Research Projects
            </Heading>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-700 border border-sky-200">
              Benchmarking
            </span>
          </div>
          <Paragraph className="mb-6 max-w-xl text-secondary">
            Rigorous evaluation work on RAG architectures and agent memory systems.
          </Paragraph>
          <Products items={filteredResearch} />
        </FadeIn>
      )}
    </Container>
  );
}
