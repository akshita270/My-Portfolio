import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Paragraph } from "../components/Paragraph";
import { WorkHistory } from "../components/WorkHistory";
import { certifications } from "../constants/techstack";
export default function AboutPage() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work & Education</Heading>
      <Paragraph className="max-w-xl mb-2 text-secondary">
        From data science internships to shipping production AI at a healthcare company — here's the journey.
      </Paragraph>

      <WorkHistory />

      {/* Certifications */}
      <div className="mt-16">
        <Heading as="h2" className="font-black text-2xl md:text-3xl mb-2">
          Certifications
        </Heading>
        <Paragraph className="text-secondary mb-6 text-sm">Continuous learning across AI, genomics, and healthcare informatics.</Paragraph>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className="flex items-start gap-3 p-4 rounded-xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center text-base flex-shrink-0">
                🏅
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900 leading-snug">{cert.title}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{cert.issuer} · {cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
