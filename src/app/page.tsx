import { H2 } from "~/components/typography";
import { WorkCard } from "~/components/WorkCard";
import { PageSection } from "~/types";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-20 py-10">
      <section className="flex flex-col items-center gap-6">
        <H2 id={PageSection.work}>Work</H2>
        <div className="flex flex-wrap justify-center gap-8">
          <WorkCard
            imgAlt="Screenshot of redesigned website"
            imgSrc="/activitar.png"
            title="Activitar"
            info="This project involved redesigning the existing website as it was outdated and need a refresh to compete for new clients."
            priority
          />
          <WorkCard
            imgAlt="Screenshot of report generation app"
            imgSrc="/report-buddy.png"
            title="Report Buddy"
            info="This project involved designing a new system for a report generating system, to save the client time."
            priority
          />
          <WorkCard
            imgAlt="Screenshot of watch sales website"
            imgSrc="/ruby-smart-watch.png"
            title="Ruby Smart Watch"
            info="This project involved creating a new website that is mobile responsive for the sale of watches."
            priority
          />
          <WorkCard
            imgAlt="Screenshot of concert ticket sales website"
            imgSrc="/swest-punk-rock.png"
            title="Swest Punk Rock"
            info="This project involved creating a new website that is mobile responsive for the sale of concert tickets."
          />
          <WorkCard
            imgAlt="Screenshot of home loan calculator app"
            imgSrc="/home-loan-calculator.png"
            title="Home Loan Calculator"
            info="This project involved designing a home loan calculator for the South African market."
          />
          <WorkCard
            imgAlt="Screenshot of sudoku app"
            imgSrc="/sudoku.png"
            title="Enjoy Sudoku"
            info="This project involved designing a Sudoku app for people to play on their cell phones."
          />
        </div>
      </section>

      <section className="flex flex-col items-center gap-6">
        <H2 id={PageSection.about}>About</H2>
        <p>Coming Soon!</p>
      </section>

      <section className="flex flex-col items-center gap-6">
        <H2 id={PageSection.contact}>Contact</H2>
        <p>Coming Soon!</p>
      </section>
    </div>
  );
}
