import { IconCircleCheckFilled } from "@tabler/icons-react";
import { timeline } from "../constants/timeline";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";

export const WorkHistory = () => {
  return (
    <div className="relative">
      {/* vertical line */}
      <div className="absolute left-5 top-0 bottom-0 w-px bg-neutral-100 hidden md:block" />

      {timeline.map((item, index) => (
        <div className="flex flex-col md:flex-row gap-6 my-10 relative" key={`timeline-${index}`}>
          {/* Logo bubble */}
          <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center text-xl shadow-sm z-10">
              {item.logo}
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
              <Heading as="h5" className="text-base md:text-base lg:text-base font-black text-emerald-600">
                {item.company}
              </Heading>
              <span className="text-xs text-neutral-400 sm:text-right flex-shrink-0">{item.date}</span>
            </div>

            <Paragraph className="text-sm font-semibold mb-0.5">{item.title}</Paragraph>
            <Paragraph className="text-xs mb-3 text-neutral-400">{item.description}</Paragraph>

            {/* Skill tags */}
            {item.skills && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {item.skills.map((s) => (
                  <span key={s} className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-600">
                    {s}
                  </span>
                ))}
              </div>
            )}

            {item.responsibilities.map((r) => (
              <Step key={r}>{r}</Step>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Step = ({ children }) => (
  <div className="flex space-x-2 items-start my-1.5">
    <IconCircleCheckFilled className="h-3 w-4 mt-1 text-emerald-400 flex-shrink-0" />
    <Paragraph className="text-sm md:text-sm lg:text-sm">{children}</Paragraph>
  </div>
);
