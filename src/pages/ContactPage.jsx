import { Contact } from "../components/Contact";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Paragraph } from "../components/Paragraph";
import { IconBrandLinkedin, IconBrandGithub, IconMail, IconClock } from "@tabler/icons-react";

const links = [
  {
    href: "https://linkedin.com/in/akshita-jain07",
    label: "LinkedIn",
    icon: IconBrandLinkedin,
    color: "#0a66c2",
    bg: "#e8f0fe",
  },
  {
    href: "https://github.com/akshita270",
    label: "GitHub",
    icon: IconBrandGithub,
    color: "#24292e",
    bg: "#f3f4f6",
  },
  {
    href: "mailto:jakshita770@gmail.com",
    label: "Email",
    icon: IconMail,
    color: "#ea4335",
    bg: "#fce8e6",
  },
];

export default function ContactPage() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Contact Me</Heading>
      <Paragraph className="mb-6 max-w-xl">
        Reach out to me over email or fill up this contact form.
      </Paragraph>

      {/* Response time badge */}
      <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-medium">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        <IconClock className="h-3.5 w-3.5" />
        Usually responds within 24h
      </div>

      {/* Social buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-neutral-200 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-sm font-medium text-neutral-800"
          >
            <link.icon className="h-5 w-5" style={{ color: link.color }} />
            {link.label}
          </a>
        ))}
      </div>

      <Contact />
    </Container>
  );
}
