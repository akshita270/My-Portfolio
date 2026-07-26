import { motion } from "framer-motion";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
    <path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" />
  </svg>
);

export const SingleProduct = ({ product }) => {
  return (
    <div className="py-10 max-w-3xl">
      {/* Title + stack */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="mt-8"
      >
        <Heading className="font-black mb-3">{product.title}</Heading>
        <div className="flex flex-wrap gap-2 mb-5">
          {product.stack?.map((s) => (
            <span key={s} className="text-xs font-medium px-2.5 py-1 rounded-full border-2 border-neutral-300 bg-neutral-50 hover:bg-white hover:border-neutral-500 text-neutral-600 transition cursor-default">
              {s}
            </span>
          ))}
        </div>
        <Paragraph className="max-w-2xl">{product.description}</Paragraph>
      </motion.div>

      {/* Highlights — dark card */}
      {product.highlights?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-8 rounded-2xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)" }}
        >
          <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${product.color}, #818cf8)` }} />
          <div className="p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Key Highlights</p>
            <ul className="space-y-3">
              {product.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-white/75 leading-relaxed">
                  <span className="mt-0.5 text-base shrink-0" style={{ color: product.color }}>▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}

      {/* Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap gap-3 mt-8"
      >
        {product.href && (
          <a href={product.href} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 group/button rounded-full hover:scale-105 focus:outline-none transition bg-white border border-neutral-200 text-primary hover:shadow-md text-sm font-medium px-4 py-2">
            View on GitHub <ArrowIcon />
          </a>
        )}
        {product.live && (
          <a href={product.live} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 group/button rounded-full hover:scale-105 focus:outline-none transition text-white text-sm font-medium px-4 py-2"
            style={{ background: product.color }}>
            Live Demo <ArrowIcon />
          </a>
        )}
        {product.blog && (
          <a href={product.blog} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 group/button rounded-full hover:scale-105 focus:outline-none transition bg-white border border-neutral-200 text-primary hover:shadow-md text-sm font-medium px-4 py-2">
            Read Article <ArrowIcon />
          </a>
        )}
      </motion.div>
    </div>
  );
};
