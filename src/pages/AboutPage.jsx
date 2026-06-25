import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { WorkHistory } from "../components/WorkHistory";

export default function AboutPage() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work & Education</Heading>
      <WorkHistory />
    </Container>
  );
}
