import { Heading } from "./Heading";
import { techStack } from "../constants/techstack";

export const TechStack = () => {
  return (
    <div>
      <Heading as="h2" className="font-black text-2xl md:text-3xl lg:text-3xl mt-20 mb-4">
        Tech Stack
      </Heading>
      <div className="flex flex-wrap gap-2">
        {techStack.map((item) => (
          <span key={item} className="text-xs bg-gray-50 hover:bg-white hover:shadow-sm hover:text-primary border border-neutral-200 hover:border-neutral-300 px-3 py-1.5 rounded-full text-secondary transition cursor-pointer">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
