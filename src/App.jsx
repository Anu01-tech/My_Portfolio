import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Spotlight from "./sections/Spotlight";
import Experience from "./sections/Experience";
import Research from "./sections/Research";
import Achievements from "./sections/Achievements";
import Education from "./sections/Education";
import Writing from "./sections/Writing";
import GithubSection from "./sections/GithubSection";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Spotlight />
        <Experience />
        <Research />
        <Achievements />
        <Education />
        <Writing />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
