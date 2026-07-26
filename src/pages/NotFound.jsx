import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <p className="text-8xl mb-4">🤖</p>
        <h1 className="text-6xl font-black text-neutral-900 mb-2">404</h1>
        <p className="text-xl font-semibold text-neutral-700 mb-2">Page not found</p>
        <p className="text-sm text-neutral-400 max-w-xs mb-8">
          Looks like this page got lost in the embedding space. Even the RAG pipeline couldn't retrieve it.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition"
        >
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
