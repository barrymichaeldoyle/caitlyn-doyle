import { AboutSection } from "./_sections/About";
import { ProjectsSection } from "./_sections/Projects";
import { ContactSection } from "./_sections/Contact";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
