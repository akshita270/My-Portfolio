import { Heading } from "./Heading";
import { techStackCategories } from "../constants/techstack";

const categoryColors = {
  "Languages": { pill: "bg-blue-50 border-blue-200 text-blue-700", label: "text-blue-400" },
  "AI / ML": { pill: "bg-violet-50 border-violet-200 text-violet-700", label: "text-violet-400" },
  "Backend & Infra": { pill: "bg-emerald-50 border-emerald-200 text-emerald-700", label: "text-emerald-400" },
  "Analytics & BI": { pill: "bg-amber-50 border-amber-200 text-amber-700", label: "text-amber-400" },
};

export const TechStack = () => {
  return (
    <div className="mt-20">
      <Heading as="h2" className="font-black text-2xl md:text-3xl lg:text-3xl mb-2">
        Tech Stack
      </Heading>
      <p className="text-sm text-secondary mb-8">Tools and technologies I use to build production AI systems.</p>
      <div className="flex flex-col gap-7">
        {techStackCategories.map((cat) => {
          const colors = categoryColors[cat.label] || { pill: "bg-neutral-50 border-neutral-200 text-neutral-700", label: "text-neutral-400" };
          return (
            <div key={cat.label}>
              <p className={`text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5 ${colors.label}`}>
                <span>{cat.icon}</span>{cat.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className={`text-sm font-medium border px-3 py-1.5 rounded-full transition-all duration-150 hover:shadow-sm hover:-translate-y-0.5 cursor-default ${colors.pill}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
