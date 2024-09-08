import { H2 } from "~/components/typography";
import { WorkCard } from "~/components/WorkCard";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-10">
      <section className="flex flex-col items-center gap-6">
        <H2 id="work">Work</H2>
        <div className="flex flex-wrap justify-center gap-6">
          <WorkCard
            title="Website Design"
            info="This project involved redesigning the existing website as it was outdated and need a refresh to compete for new clients."
          />
          <WorkCard
            title="System Design"
            info="This project involved designing a new system for a report generating system, to save the client time."
          />
          <WorkCard
            title="Case Study"
            info="This project involved creating a new website that is mobile responsive for the sale of watches."
          />
        </div>
      </section>
      <section>
        <H2 id="about">About</H2>
      </section>
      <section>
        <H2 id="contact">Contact</H2>
      </section>
    </div>
  );
}
