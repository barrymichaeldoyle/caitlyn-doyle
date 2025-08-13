import { MobileAppItem } from "~/components/MobileAppItem";
import { H1, H2, P } from "~/components/typography";
import { WebsiteItem } from "~/components/WebsiteItem";

import { InnerContent } from "~/layout/InnerContent";
import { PageSection } from "~/types";

export function ProjectsSection() {
  return (
    <section
      id={PageSection.projects}
      className="flex w-full scroll-mt-20 flex-col items-center gap-6 p-10"
    >
      <InnerContent>
        <H1>Projects</H1>
        <H2>Mobile Apps</H2>
        <P>
          Designing for mobile means thinking about users on the move and
          <br />
          creating intuitive, accessible experience that fit into their lives
          <br />
          seamlessly.
        </P>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <MobileAppItem
            title="Enjoy Sudoku"
            description="Sudoku game"
            imageSrc="/apps/sudoku.gif"
            imageAlt="Enjoy Sudoku app gif"
          />
          <MobileAppItem
            title="ZA Home Loan Calculator"
            description="Repayments calculator"
            imageSrc="/apps/homeloan.gif"
            imageAlt="ZA Home Loan Calculator app gif"
          />
          <MobileAppItem
            title="CCD"
            description="Coffee e-commerce store"
            imageSrc="/apps/CCD.gif"
            imageAlt="CCD app gif"
          />
        </div>
      </InnerContent>
    </section>
  );
}
