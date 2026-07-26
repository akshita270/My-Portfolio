export const Footer = () => {
  return (
    <footer className="border-t border-neutral-100 mt-16 px-6 py-8">
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-neutral-800">Akshita Jain</p>
          <p className="text-xs text-neutral-400 mt-0.5">AI Engineer · Building with LLMs & RAG</p>
        </div>
        <div className="flex items-center gap-4 text-xs text-neutral-400">
          <a href="https://linkedin.com/in/akshita-jain27" target="_blank" rel="noreferrer" className="hover:text-neutral-700 transition">LinkedIn</a>
          <a href="https://github.com/akshita270" target="_blank" rel="noreferrer" className="hover:text-neutral-700 transition">GitHub</a>
          <a href="mailto:jakshita770@gmail.com" className="hover:text-neutral-700 transition">Email</a>
        </div>
        <p className="text-xs text-neutral-400">© {new Date().getFullYear()} Akshita Jain</p>
      </div>
    </footer>
  );
};
