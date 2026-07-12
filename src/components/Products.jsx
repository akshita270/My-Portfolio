import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { products as allProducts } from "../constants/products";

export const Products = ({ items = allProducts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {items.map((product, idx) => (
        <motion.div
          key={product.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: idx * 0.06 }}
        >
          <Link
            to={`/projects/${product.slug}`}
            className="group flex flex-col h-full border border-neutral-100 hover:border-neutral-200 hover:shadow-xl rounded-2xl transition-all duration-200 overflow-hidden bg-white hover:-translate-y-1 hover:scale-[1.02]"
          >
            <div
              className="w-full h-[160px] flex items-center justify-center text-5xl flex-shrink-0 overflow-hidden"
              style={{ background: `${product.color}15` }}
            >
              {product.image ? (
                <img src={product.image} alt={product.title} className={product.contain ? "w-full h-full object-contain" : "w-full h-full object-cover object-top"} />
              ) : (
                product.thumbnail
              )}
            </div>
            <div className="flex flex-col justify-between flex-1 p-5">
              <div>
                <Heading as="h4" className="font-black text-base md:text-base lg:text-base">
                  {product.title}
                </Heading>
                <Paragraph className="text-sm md:text-sm lg:text-sm mt-2">
                  {product.description}
                </Paragraph>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {product.stack?.map((stack) => (
                  <span key={stack} className="text-xs md:text-xs lg:text-xs bg-gray-50 hover:bg-white hover:text-primary border-2 border-neutral-300 hover:border-neutral-500 px-2 py-1 rounded-sm text-secondary transition cursor-pointer">
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
