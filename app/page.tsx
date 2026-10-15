import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </main>
  );
}
