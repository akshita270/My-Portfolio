import { Heading } from "./Heading";
import { techStackCategories } from "../constants/techstack";

export const TechStack = () => {
  return (
    <div className="mt-20">
      <Heading as="h2" className="font-black text-2xl md:text-3xl lg:text-3xl mb-6">
        Tech Stack
      </Heading>
      <div className="flex flex-col gap-6">
        {techStackCategories.map((cat) => (
          <div key={cat.label}>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2 flex items-center gap-1.5">
              <span>{cat.icon}</span>{cat.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="text-sm font-medium bg-neutral-50 hover:bg-white hover:shadow-sm hover:text-primary border border-neutral-200 hover:border-neutral-300 px-3 py-1.5 rounded-full text-neutral-700 transition cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
