import { Navbar } from "@/components/portfolio/Navbar";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Hero } from "@/components/portfolio/Hero";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { ActiveProject } from "@/components/portfolio/ActiveProject";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Interests } from "@/components/portfolio/Interests";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop } from "@/components/portfolio/BackToTop";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <ActiveProject />
      <Projects />
      <Education />
      <Interests />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
};

export default Index;
