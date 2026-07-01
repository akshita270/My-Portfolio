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
            className="px-6 z-[100] py-10 bg-neutral-100 max-w-[14rem] lg:w-fit fixed lg:relative h-screen left-0 flex flex-col justify-between"
          >
            <div className="flex-1 overflow-auto">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
            <div onClick={() => isMobile() && setOpen(false)}>
              <Badge href="/resume" text="Read Resume" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="fixed lg:hidden bottom-4 right-4 h-8 w-8 border border-neutral-200 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"
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
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {navlinks.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-secondary hover:text-primary hover:bg-white hover:shadow-md transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            isActive(link.href) && "bg-white shadow-lg text-primary"
          )}
        >
          <link.icon className={twMerge("h-4 w-4 flex-shrink-0", isActive(link.href) && "text-sky-500")} />
          <span>{link.label}</span>
        </Link>
      ))}

      <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-10 px-2">
        Socials
      </Heading>
      {socials.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="text-secondary hover:text-primary hover:bg-white hover:shadow-md transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
        >
          <link.icon className="h-4 w-4 flex-shrink-0" />
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex space-x-2">
      <img
        src="https://api.dicebear.com/7.x/initials/svg?seed=Akshita%20Jain&backgroundColor=8b5cf6&textColor=ffffff"
        alt="Avatar"
        height="40"
        width="40"
        className="object-cover object-top rounded-full flex-shrink-0 h-10 w-10"
      />
      <div className="flex text-sm flex-col">
        <p className="font-bold text-primary">Akshita Jain</p>
        <p className="font-light text-secondary">Data Analyst</p>
      </div>
    </div>
  );
};
