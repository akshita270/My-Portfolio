import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heading } from "./Heading";
import { products as allProducts } from "../constants/products";

export const Products = ({ items = allProducts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {items.map((product, idx) => (
        <motion.div
          key={product.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: idx * 0.06 }}
          className="h-full"
        >
          <Link
            to={`/projects/${product.slug}`}
            className="group flex flex-col h-full rounded-2xl border border-neutral-200 bg-white hover:shadow-xl hover:-translate-y-1 hover:scale-[1.015] transition-all duration-250 overflow-hidden"
          >
            {/* Color banner + image */}
            <div
              className="relative w-full h-[170px] flex items-center justify-center flex-shrink-0 overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${product.color}22 0%, ${product.color}10 100%)` }}
            >
              {/* accent line at top */}
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: product.color }} />

              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className={`w-full h-full ${product.contain ? "object-contain p-4" : "object-cover object-top"}`}
                />
              ) : (
                <span className="text-6xl select-none">{product.thumbnail}</span>
              )}

              {/* year badge */}
              {product.period && (
                <span
                  className="absolute top-3 right-3 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: `${product.color}25`, color: product.color }}
                >
                  {product.period}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 gap-3">
              <div className="flex items-start justify-between gap-2">
                <Heading as="h4" className="font-black text-sm md:text-sm lg:text-sm leading-snug">
                  {product.title}
                </Heading>
                {/* arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16"
                  viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="flex-shrink-0 mt-0.5 text-neutral-300 group-hover:text-neutral-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                >
                  <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                </svg>
              </div>

              <p className="text-xs text-secondary leading-relaxed line-clamp-3">
                {product.description}
              </p>

              {/* first highlight as teaser */}
              {product.highlights?.[0] && (
                <p className="text-xs leading-relaxed line-clamp-2 pl-3 border-l-2" style={{ borderColor: product.color, color: product.color + "cc" }}>
                  {product.highlights[0]}
                </p>
              )}

              {/* stack tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-neutral-100">
                {product.stack?.map((stack) => (
                  <span
                    key={stack}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-full border border-neutral-200 text-secondary bg-neutral-50 hover:bg-white hover:border-neutral-400 hover:text-primary transition cursor-pointer"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
