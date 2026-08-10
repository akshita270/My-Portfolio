import { IconCircleCheckFilled } from "@tabler/icons-react";
import { timeline } from "../constants/timeline";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";

const typeColors = {
  "KareXpert": { accent: "#10b981", bg: "#ecfdf5", border: "#6ee7b7" },
  "Boston University — Faculty of Computing & Data Sciences": { accent: "#6366f1", bg: "#eef2ff", border: "#a5b4fc" },
  "1Gen": { accent: "#f59e0b", bg: "#fffbeb", border: "#fcd34d" },
  "Boston University": { accent: "#6366f1", bg: "#eef2ff", border: "#a5b4fc" },
  "Guru Gobind Singh Indraprastha University": { accent: "#8b5cf6", bg: "#f5f3ff", border: "#c4b5fd" },
};

export const WorkHistory = () => {
  return (
    <div className="relative mt-4">
      {/* vertical line */}
      <div className="absolute left-5 top-2 bottom-0 w-px bg-gradient-to-b from-neutral-200 to-transparent hidden md:block" />

      {timeline.map((item, index) => {
        const colors = typeColors[item.company] || { accent: "#6366f1", bg: "#eef2ff", border: "#a5b4fc" };
        return (
          <div
            key={`timeline-${index}`}
            className="flex flex-col md:flex-row gap-6 my-8 relative"
          >
            {/* Logo bubble */}
            <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-sm z-10 border-2"
                style={{ background: colors.bg, borderColor: colors.border }}
              >
                {item.logo}
              </div>
            </div>

            <div className="flex-1 rounded-xl border border-neutral-100 bg-white/60 p-5 hover:border-neutral-200 hover:shadow-sm transition-all duration-200">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                <Heading as="h5" className="text-base md:text-base lg:text-base font-black" style={{ color: colors.accent }}>
                  {item.company}
                </Heading>
                <span className="text-xs text-neutral-400 sm:text-right flex-shrink-0 font-medium">{item.date}</span>
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Paragraph className="text-sm font-semibold mb-0">{item.title}</Paragraph>
                <span className="text-xs text-neutral-400 border border-neutral-200 rounded-full px-2 py-0.5">{item.description}</span>
              </div>

              {/* Skill tags */}
              {item.skills && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-full border"
                      style={{ background: colors.bg, borderColor: colors.border, color: colors.accent }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}

              <div className="space-y-1.5">
                {item.responsibilities.map((r) => (
                  <Step key={r} color={colors.accent}>{r}</Step>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Step = ({ children, color }) => (
  <div className="flex space-x-2 items-start">
    <IconCircleCheckFilled className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color }} />
    <Paragraph className="text-sm md:text-sm lg:text-sm">{children}</Paragraph>
  </div>
);
