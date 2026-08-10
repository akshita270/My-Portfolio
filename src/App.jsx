import { useEffect, useState, useCallback } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import ArticlesPage from "./pages/ArticlesPage";
import NotFound from "./pages/NotFound";

const PageWrapper = ({ children }) => <div>{children}</div>;

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const onScroll = useCallback(() => {
    const el = document.documentElement;
    const scrolled = el.scrollTop || document.body.scrollTop;
    const total = el.scrollHeight - el.clientHeight;
    setProgress(total > 0 ? (scrolled / total) * 100 : 0);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-sky-500 via-violet-500 to-indigo-500 transition-all duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-28 right-4 lg:bottom-20 lg:right-6 z-50 h-9 w-9 rounded-full bg-white border border-neutral-200 shadow-md flex items-center justify-center hover:shadow-lg transition-all text-neutral-600 hover:text-neutral-900"
          title="Back to top"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function DarkModeToggle({ dark, toggle }) {
  return (
    <button
      onClick={toggle}
      className="fixed bottom-16 right-4 lg:bottom-6 lg:right-6 z-50 h-9 w-9 rounded-full bg-white border border-neutral-200 shadow-md flex items-center justify-center hover:shadow-lg transition-all"
      title="Toggle dark mode"
    >
      <span className="text-base">{dark ? "☀️" : "🌙"}</span>
    </button>
  );
}

function App() {
  const location = useLocation();
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="flex antialiased min-h-screen app-shell">
      <Sidebar />
      <div className="lg:pl-2 lg:pt-2 app-shell flex-1">
        <div className="flex-1 app-surface min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-hidden">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
              <Route path="/projects" element={<PageWrapper><ProjectsPage /></PageWrapper>} />
              <Route path="/projects/:slug" element={<PageWrapper><ProjectDetailPage /></PageWrapper>} />
              <Route path="/articles" element={<PageWrapper><ArticlesPage /></PageWrapper>} />
              <Route path="/resume" element={<PageWrapper><ResumePage /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
              <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </div>
      <ScrollProgressBar />
      <BackToTop />
      <DarkModeToggle dark={dark} toggle={() => setDark((d) => !d)} />
    </div>
  );
}

export default App;
