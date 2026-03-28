import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Education from "@/components/Education";
import Projects from "./projects/page";
import Contact from "./contact/page";
export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}
