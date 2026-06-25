import { useParams, Navigate } from "react-router-dom";
import { Container } from "../components/Container";
import { SingleProduct } from "../components/Product";
import { products } from "../constants/products";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/projects" replace />;

  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}
