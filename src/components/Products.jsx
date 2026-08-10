import { Link } from "react-router-dom";
import { Heading } from "./Heading";
import { products as allProducts } from "../constants/products";

const ArrowUpRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className="flex-shrink-0 mt-0.5 text-neutral-300 group-hover:text-neutral-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
  </svg>
);

export const Products = ({ items = allProducts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {items.map((product, idx) => (
        <div
          key={product.slug}
          className="h-full"
        >
          <Link
            to={`/projects/${product.slug}`}
            className="group flex flex-col h-full rounded-2xl border border-neutral-200 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-250 overflow-hidden"
          >
            {/* Thumbnail */}
            <div
              className="relative w-full h-[175px] flex items-center justify-center flex-shrink-0 overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${product.color}20 0%, ${product.color}08 100%)` }}
            >
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className={`absolute inset-0 w-full h-full ${product.contain ? "object-contain p-4" : "object-cover object-top"}`}
                />
              ) : (
                <span className="text-6xl select-none">{product.thumbnail}</span>
              )}

              {/* Gradient overlay at bottom for readability */}
              <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/20 to-transparent" />

              {/* Badges */}
              <div className="absolute top-3 left-3 flex gap-1.5">
                {product.featured && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-400 text-amber-900 tracking-wide uppercase shadow-sm">
                    ★ Featured
                  </span>
                )}
                {product.research && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 tracking-wide uppercase shadow-sm">
                    Research
                  </span>
                )}
              </div>
              <div className="absolute top-3 right-3 flex gap-1.5">
                {product.live && (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700 flex items-center gap-1 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
                    Live
                  </span>
                )}
                {product.period && (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-black/10 text-neutral-600">
                    {product.period}
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 gap-2.5">
              <div className="flex items-start justify-between gap-2">
                <Heading as="h4" className="font-black text-base md:text-base lg:text-base leading-snug">
                  {product.title}
                </Heading>
                <ArrowUpRight />
              </div>

              <p className="text-sm text-secondary leading-relaxed line-clamp-2">
                {product.description}
              </p>

              {/* First highlight as teaser */}
              {product.highlights?.[0] && (
                <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2 pl-3 border-l-2 border-neutral-200 italic">
                  {product.highlights[0]}
                </p>
              )}

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-neutral-100">
                {product.stack?.slice(0, 5).map((stack) => (
                  <span
                    key={stack}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-full border border-neutral-200 text-neutral-600 bg-neutral-50"
                  >
                    {stack}
                  </span>
                ))}
                {product.stack?.length > 5 && (
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full border border-neutral-200 text-neutral-400 bg-neutral-50">
                    +{product.stack.length - 5}
                  </span>
                )}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
