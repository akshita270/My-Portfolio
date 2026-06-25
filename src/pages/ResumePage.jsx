import { Container } from "../components/Container";
import { Heading } from "../components/Heading";

export default function ResumePage() {
  return (
    <Container>
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-4xl">📄</span>
          <Heading className="font-black mt-1">Resume</Heading>
        </div>
        <a
          href="/akshita_jain_resume.pdf"
          download
          className="inline-flex items-center gap-2 bg-white border border-neutral-200 text-primary text-sm font-medium px-4 py-2 rounded-full hover:shadow-md transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Resume
        </a>
      </div>

      <iframe
        src="/akshita_jain_resume.pdf"
        className="w-full rounded-lg border border-neutral-200"
        style={{ height: "85vh" }}
        title="Akshita Jain Resume"
      />
    </Container>
  );
}
