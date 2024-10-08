import { H2 } from "~/components/typography";
import { WorkCard } from "~/components/WorkCard";
import {
  activitar,
  homeLoanCalculator,
  portfolioWebsite,
  reportBuddy,
  rubySmartWatch,
  sudoku,
  swestPunkRock,
} from "~/constants/links";
import { InnerContent } from "~/layout/InnerContent";
import { PageSection } from "~/types";

export function WorkSection() {
  return (
    <section
      id={PageSection.work}
      className="flex scroll-mt-20 flex-col items-center gap-6 py-10"
    >
      <H2>Work</H2>
      <InnerContent className="p-4">
        <div className="flex flex-wrap justify-center gap-8">
          <WorkCard
            link={activitar}
            imgAlt="Screenshot of redesigned website"
            imgSrc="/activitar.png"
            title="Activitar"
            info="This project involved redesigning the existing website as it was outdated."
          />
          <WorkCard
            link={reportBuddy}
            imgAlt="Screenshot of report generation app"
            imgSrc="/report-buddy.png"
            title="Report Buddy"
            info="This project involved designing a new system for a report generating system, to save the client time."
          />
          <WorkCard
            link={rubySmartWatch}
            imgAlt="Screenshot of watch sales website"
            imgSrc="/ruby-smart-watch.png"
            title="Ruby Smart Watch"
            info="This project involved creating a new website that is mobile responsive for the sale of watches."
          />
          <WorkCard
            link={swestPunkRock}
            imgAlt="Screenshot of concert ticket sales website"
            imgSrc="/swest-punk-rock.png"
            title="Swest Punk Rock"
            info="This project involved creating a new website that is mobile responsive for the sale of concert tickets."
          />
          <WorkCard
            link={homeLoanCalculator}
            imgAlt="Screenshot of home loan calculator app"
            imgSrc="/home-loan-calculator.png"
            title="Home Loan Calculator"
            info="This project involved designing a home loan calculator for the South African market."
          />
          <WorkCard
            link={sudoku}
            imgAlt="Screenshot of sudoku app"
            imgSrc="/sudoku.png"
            title="Enjoy Sudoku"
            info="This project involved designing a Sudoku app for people to play on their cell phones."
          />
          <WorkCard
            link={portfolioWebsite}
            imgAlt="Screenshot of portfolio website"
            imgSrc="/portfolio.png"
            title="Portfolio Website"
            info="This project involved designing the website you are currently viewing."
          />
        </div>
      </InnerContent>
    </section>
  );
}
