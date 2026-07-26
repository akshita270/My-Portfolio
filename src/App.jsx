import { useEffect, useState } from "react";
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

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.25, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

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
    <div className="flex antialiased min-h-screen bg-gray-100">
      <Sidebar />
      <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1">
        <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-hidden">
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
      <DarkModeToggle dark={dark} toggle={() => setDark((d) => !d)} />
    </div>
  );
}

export default App;
