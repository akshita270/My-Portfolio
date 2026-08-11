import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { navlinks } from "../constants/navlinks";
import { socials } from "../constants/socials";
import { Heading } from "./Heading";
import { Badge } from "./Badge";

const isMobile = () => typeof window !== "undefined" && window.innerWidth < 1024;

const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "JavaScript", "SQL"],
  },
  {
    label: "GenAI & Agentic AI",
    skills: ["RAG", "LangChain", "LangGraph", "CrewAI", "Embeddings", "OpenAI GPT", "Claude", "Hugging Face", "Prompt Engineering", "MCP", "LoRA / QLoRA", "LLM Evaluation"],
  },
  {
    label: "Frameworks",
    skills: ["FastAPI", "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "NumPy", "Pandas"],
  },
  {
    label: "Databases & Viz",
    skills: ["MySQL", "MongoDB", "Neo4j", "Redis", "ChromaDB", "FAISS", "Tableau", "Power BI"],
  },
  {
    label: "DevOps & Cloud",
    skills: ["Linux", "Git / GitHub Actions", "Docker", "Kubernetes", "AWS"],
  },
];

export const Sidebar = () => {
  const [open, setOpen] = useState(!isMobile());

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={{ x: -200 }}
            className="px-5 z-[100] py-10 bg-neutral-100 max-w-[14rem] lg:w-fit fixed lg:relative h-screen left-0 flex flex-col justify-between border-r border-neutral-200/60"
          >
            <div className="flex-1 overflow-y-auto">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
              <SidebarSkills />
            </div>
            <div onClick={() => isMobile() && setOpen(false)}>
              <Badge href="/resume" text="Read Resume" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="fixed lg:hidden bottom-4 right-4 h-9 w-9 border border-neutral-200 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center z-50 shadow-md"
        onClick={() => setOpen(!open)}
      >
        <IconLayoutSidebarRightCollapse className="h-4 w-4 text-secondary" />
      </button>
    </>
  );
};

const Navigation = ({ setOpen }) => {
  const { pathname } = useLocation();
  const isActive = (href) => pathname === href;

  return (
    <div className="flex flex-col space-y-0.5 my-8 relative z-[100]">
      {navlinks.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-secondary hover:text-primary hover:bg-white/80 hover:shadow-sm transition-all duration-150 flex items-center space-x-2.5 py-2 px-3 rounded-lg text-sm font-medium",
            isActive(link.href) && "bg-white shadow-md text-primary font-semibold"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0 text-neutral-400",
              isActive(link.href) && "text-violet-500"
            )}
          />
          <span>{link.label}</span>
          {isActive(link.href) && (
            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
          )}
        </Link>
      ))}

      <div className="pt-6 pb-1">
        <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 px-3 mb-1">
          Socials
        </p>
      </div>
      {socials.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="text-secondary hover:text-primary hover:bg-white/80 hover:shadow-sm transition-all duration-150 flex items-center space-x-2.5 py-2 px-3 rounded-lg text-sm"
        >
          <link.icon className="h-4 w-4 flex-shrink-0 text-neutral-400" />
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
};

const SidebarSkills = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-2 mb-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg hover:bg-white/80 transition-all duration-150 group"
      >
        <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-neutral-500">
          Skills
        </p>
        <span className={`text-[10px] text-neutral-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {open && (
        <div className="mt-2 flex flex-col gap-3 px-1">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 px-2 mb-1.5">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-1 px-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-white border border-neutral-200 text-neutral-600 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex space-x-3 items-center">
      <div className="relative">
        <img
          src="/images/akshita-profile.jpg"
          alt="Akshita Jain"
          className="object-cover object-top rounded-full flex-shrink-0 h-10 w-10 border-2 border-white shadow-sm"
        />
        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-neutral-100 rounded-full" />
      </div>
      <div className="flex text-sm flex-col">
        <p className="font-bold text-primary text-[13px]">Akshita Jain</p>
        <p className="font-medium text-[11px] text-violet-500">AI Engineer</p>
      </div>
    </div>
  );
};
