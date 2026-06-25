import { IconCircleCheckFilled } from "@tabler/icons-react";
import { timeline } from "../constants/timeline";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";

export const WorkHistory = () => {
  return (
    <div>
      {timeline.map((item, index) => (
        <div className="flex md:flex-row flex-col space-y-4 md:space-y-0 md:space-x-10 my-16 relative" key={`timeline-${index}`}>
          <Paragraph className="w-40 flex-shrink-0">{item.date}</Paragraph>
          <div>
            <Heading as="h5" className="text-lg md:text-lg lg:text-lg text-emerald-500">
              {item.company}
            </Heading>
            <Paragraph className="text-base md:text-base lg:text-base font-semibold">
              {item.title}
            </Paragraph>
            <Paragraph className="text-sm md:text-sm lg:text-sm mb-4">
              {item.description}
            </Paragraph>

            {item.responsibilities.map((responsibility) => (
              <Step key={responsibility}>{responsibility}</Step>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Step = ({ children }) => {
  return (
    <div className="flex space-x-1 items-start my-2">
      <IconCircleCheckFilled className="h-3 w-4 mt-1 text-neutral-300 flex-shrink-0" />
      <Paragraph className="text-sm md:text-sm lg:text-sm">{children}</Paragraph>
    </div>
  );
};
