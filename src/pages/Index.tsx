import Background from "@/components/portfolio/Background";
import CursorGlow from "@/components/portfolio/CursorGlow";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import FeaturedProject from "@/components/portfolio/FeaturedProject";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Playground from "@/components/portfolio/Playground";
import About from "@/components/portfolio/About";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Background />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <FeaturedProject />
        <Projects />
        <Skills />
        <Playground />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
