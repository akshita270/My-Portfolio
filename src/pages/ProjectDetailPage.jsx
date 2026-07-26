import { useParams, Navigate, useNavigate } from "react-router-dom";
import { Container } from "../components/Container";
import { SingleProduct } from "../components/Product";
import { products } from "../constants/products";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/projects" replace />;

  return (
    <Container>
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 mb-6 text-sm text-neutral-500 hover:text-neutral-900 transition group"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
        Back to Projects
      </button>
      <SingleProduct product={product} />
    </Container>
  );
}
