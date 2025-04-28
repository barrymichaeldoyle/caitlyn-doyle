import { H1, H2, P } from "~/components/typography";
import { WebsiteItem } from "~/components/WebsiteItem";
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

export function ProjectsSection() {
  return (
    <section
      id={PageSection.projects}
      className="flex w-full scroll-mt-20 flex-col gap-6 p-10"
    >
      <InnerContent>
        <H1>My Projects</H1>
        <H2>Websites</H2>
        <P>
          Every project you see here challenged me to think depper, design
          <br />
          smarter, and always keep the user first. I&apos;m excited to share a
          <br />
          glimpse into my process and outcomes.
        </P>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <WebsiteItem
            title="CRJ UK"
            description="Provide waste, recycling and forestry equipment solutions in the UK"
            imageSrc="/websites/CRJ.webp"
            imageAlt="CRJ UK website screenshot"
          />
          <WebsiteItem
            title="Enterprise Stewardship"
            description="Business and life coaching"
            imageSrc="/websites/ES.webp"
            imageAlt="Enterprise Stewardship website screenshot"
          />
          <WebsiteItem
            title="Aephoria"
            description="Coaching agency"
            imageSrc="/websites/Aephoria.webp"
            imageAlt="Aephoria website screenshot"
          />
          <WebsiteItem
            title="Lecico"
            description="Bathroom e-commerce store"
            imageSrc="/websites/Lecico.webp"
            imageAlt="Lecico website screenshot"
          />
          <WebsiteItem
            title="Goldbits"
            description="Gold purchasing service"
            imageSrc="/websites/Gold Bits.webp"
            imageAlt="Goldbits website screenshot"
          />
          <WebsiteItem
            title="Shift ONE Digital"
            description="Marketing agency"
            imageSrc="/websites/Shift ONE Digital.webp"
            imageAlt="Shift ONE Digital website screenshot"
          />
        </div>
        <H2>Mobile Apps</H2>
      </InnerContent>
    </section>
  );
}
