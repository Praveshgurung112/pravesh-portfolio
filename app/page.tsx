import Navbar from "@/components/main/Navbar";
import Hero from "@/components/main/Hero";
import About from "@/components/main/About";
import Skills from "@/components/main/Skills";
import ExperienceSection from "@/components/main/Experience";
import Projects from "@/components/main/Projects";
import Certifications from "@/components/main/Certifications";
import Contact from "@/components/main/Contact";
import Footer from "@/components/main/Footer";
import StarsCanvas from "@/components/sub/StarsCanvas";
import { skills, projects, experience, certifications } from "@/constants";

export default function Home() {
  return (
    <main className="relative overflow-hidden w-full flex flex-col items-center">
      <StarsCanvas />
      <Navbar />
      <Hero />
      <About />
      <Skills skills={skills} />
      <ExperienceSection experiences={experience} />
      <Projects projects={projects} />
      <Certifications certifications={certifications} />
      <Contact />
      <Footer />
    </main>
  );
}
