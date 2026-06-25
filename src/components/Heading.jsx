import { twMerge } from "tailwind-merge";

export const Heading = ({ className, children, as: Tag = "h1" }) => {
  return (
    <Tag
      className={twMerge(
        "text-base md:text-xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary",
        className
      )}
    >
      {children}
    </Tag>
  );
};
