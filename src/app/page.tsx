import { AboutSection } from "./_sections/About";
import { WorkSection } from "./_sections/Work";
import { ContactSection } from "./_sections/Contact";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-10">
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </div>
  );
}
