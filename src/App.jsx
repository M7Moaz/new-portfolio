import { useEffect, useState, lazy } from "react";
import { Navbar } from "./components/Navbar";
import { Awards } from "./components/Awards";
import Container from "./components/Container";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/projects";
import { useTranslation } from "react-i18next";
import Metadata from "./components/Metadata";
function App() {
  const [modeState, setModeState] = useState(
    localStorage.getItem("mode") || "light"
  );
  useEffect(() => {
    localStorage.setItem("mode", modeState);
  }, [modeState]);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const currentLang = i18n.language;
    document.documentElement.lang = currentLang;

    if (currentLang === "ar") {
      document.body.setAttribute("dir", "rtl");
      document.body.style.fontFamily = "Cairo, sans-serif";
    } else {
      document.body.setAttribute("dir", "ltr");
      document.body.style.fontFamily = "Righteous, sans-serif";
    }
  }, [i18n.language]);

  return (
    <main className={`${modeState}`}>
      <Metadata />
      <div
        id="home"
        className="min-h-[calc(100vh-20vh)] py-3 bg-gradient-to-br from-blue-50 via-purple-100 to-red-50 dark:from-gray-700 dark:via-slate-700 dark:to-gray-600 overflow-hidden"
      >
        <Navbar modeSt={setModeState} />
        <Hero />
      </div>
      <div className=" py-5 bg-gradient-to-br from-purple-100 via-red-50 to-blue-50 dark:from-slate-700 dark:via-gray-600 dark:to-gray-700 overflow-x-hidden">
        <Awards />
      </div>
      <div
        className="py-3 pb-12 bg-gradient-to-br from-red-50 via-blue-50 to-purple-100 dark:from-gray-600 dark:via-gray-700 dark:to-slate-700 overflow-hidden"
        id="services"
      >
        <Container>
          <Services />
        </Container>
      </div>
      <div className="py-3 bg-gradient-to-br from-blue-50 via-purple-100 to-red-50 dark:from-gray-700 dark:via-slate-700 dark:to-gray-700 overflow-hidden">
        <Container>
          <Projects />
        </Container>
      </div>
      <div className="py-3 pb-9 bg-gradient-to-br from-purple-100 via-red-50 to-blue-50 dark:from-slate-700 dark:via-gray-700 dark:to-gray-700 overflow-hidden">
        <Container>
          <Skills />
        </Container>
      </div>
      <div className="py-5 bg-gradient-to-br from-red-50 via-blue-50 to-purple-100 dark:from-gray-700 dark:via-gray-700 dark:to-slate-600 overflow-x-hidden">
        <Contact />
      </div>
      <div className="py-4 bg-gradient-to-br from-blue-50 via-purple-100 to-red-50 dark:from-gray-700 dark:via-slate-600 dark:to-gray-600 overflow-x-hidden text-center border border-x-0 border-b-0 border-brand dark:border-primary">
        <Footer />
      </div>
    </main>
  );
}

export default App;
