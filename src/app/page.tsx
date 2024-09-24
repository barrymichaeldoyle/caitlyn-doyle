import { H2 } from "~/components/typography";
import { PageSection } from "~/types";
import { AboutSection } from "./_sections/About";
import { WorkSection } from "./_sections/Work";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-20">
      <AboutSection />

      <WorkSection />

      <section className="flex flex-col items-center gap-6">
        <H2 id={PageSection.contact}>Contact</H2>
        <p>Coming Soon!</p>
      </section>
    </div>
  );
}
