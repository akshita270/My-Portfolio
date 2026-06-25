import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import ArticlesPage from "./pages/ArticlesPage";

function App() {
  return (
    <div className="flex antialiased min-h-screen bg-gray-100">
      <Sidebar />
      <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1">
        <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
