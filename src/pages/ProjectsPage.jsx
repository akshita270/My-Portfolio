import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Paragraph } from "../components/Paragraph";
import { Products } from "../components/Products";
import { products } from "../constants/products";

export default function ProjectsPage() {
  const mainProjects = products.filter((p) => !p.research);
  const researchProjects = products.filter((p) => p.research);

  return (
    <Container>
      <span className="text-4xl">🧠</span>
      <Heading className="font-black mb-2">Projects</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Multi-agent pipelines, genomic AI, healthcare NLP — projects that push the boundaries of what AI can do.
      </Paragraph>
      <Products items={mainProjects} />

      {researchProjects.length > 0 && (
        <div className="mt-16">
          <Heading as="h2" className="font-black text-2xl md:text-3xl lg:text-3xl mb-2">
            Research Projects
          </Heading>
          <Paragraph className="mb-6 max-w-xl">
            Benchmarking and evaluation work exploring RAG architectures and agent memory.
          </Paragraph>
          <Products items={researchProjects} />
        </div>
      )}
    </Container>
  );
}
