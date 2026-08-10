export const Footer = () => {
  return (
    <footer className="border-t border-neutral-100 mt-20 px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold text-neutral-800">Akshita Jain</p>
            <p className="text-xs text-neutral-400 mt-0.5">AI Engineer · RAG · LLMs · Agentic AI</p>
          </div>

          <div className="flex items-center gap-1">
            {[
              { href: "https://linkedin.com/in/akshita-jain27", label: "LinkedIn" },
              { href: "https://github.com/akshita270", label: "GitHub" },
              { href: "mailto:jakshita770@gmail.com", label: "Email" },
            ].map((link, i, arr) => (
              <span key={link.label} className="flex items-center">
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="text-xs text-neutral-400 hover:text-neutral-800 transition-colors duration-150 px-2 py-1 rounded hover:bg-neutral-100"
                >
                  {link.label}
                </a>
                {i < arr.length - 1 && <span className="text-neutral-200 text-xs">·</span>}
              </span>
            ))}
          </div>

          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} Akshita Jain · Built with React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};
