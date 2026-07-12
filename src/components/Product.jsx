import { motion } from "framer-motion";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

export const SingleProduct = ({ product }) => {
  return (
    <div className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-md h-[260px] md:h-[360px] flex items-center justify-center text-8xl overflow-hidden"
        style={{ background: `${product.color}15` }}
      >
        {product.image ? (
          <img src={product.image} alt={product.title} className={`w-full h-full ${product.contain ? "object-contain" : "object-cover object-top"}`} />
        ) : (
          product.thumbnail
        )}
      </motion.div>

      <div className="flex lg:flex-row justify-between items-center flex-col mt-10">
        <Heading className="font-black mb-2 pb-1">{product.title}</Heading>
        <div className="flex flex-wrap gap-2 md:mb-1 mt-2 md:mt-0">
          {product.stack?.map((stack) => (
            <span key={stack} className="text-xs md:text-xs lg:text-xs bg-gray-50 hover:bg-white hover:text-primary border border-neutral-200 hover:border-neutral-300 hover:shadow-sm px-2 py-1 rounded-sm text-secondary transition cursor-pointer">
              {stack}
            </span>
          ))}
        </div>
      </div>

      <Paragraph className="max-w-2xl mt-4">{product.description}</Paragraph>

      <ul className="mt-6 space-y-2">
        {product.highlights?.map((h) => (
          <li key={h} className="flex space-x-2 text-sm text-secondary">
            <span style={{ color: product.color }}>▸</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-3 mt-8">
        <a
          href={product.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition bg-white border border-neutral-200 text-primary hover:shadow-md text-sm font-medium px-4 py-2 origin-left"
        >
          View on GitHub
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
            <path d="M5 12l14 0"></path>
            <path d="M13 18l6 -6"></path>
            <path d="M13 6l6 6"></path>
          </svg>
        </a>

        {product.live && (
          <a
            href={product.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition bg-white border border-neutral-200 text-primary text-sm font-medium px-4 py-2 origin-left"
          >
            Live Demo
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
              <path d="M5 12l14 0"></path>
              <path d="M13 18l6 -6"></path>
              <path d="M13 6l6 6"></path>
            </svg>
          </a>
        )}

        {product.blog && (
          <a
            href={product.blog}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition bg-white border border-neutral-200 text-primary text-sm font-medium px-4 py-2 origin-left"
          >
            Read Blog
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
              <path d="M5 12l14 0"></path>
              <path d="M13 18l6 -6"></path>
              <path d="M13 6l6 6"></path>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};
