import Image from "next/image";
import { H2, H3, P } from "~/components/typography";
import { InnerContent } from "~/layout/InnerContent";
import { PageSection } from "~/types";

export function AboutSection() {
  return (
    <section className="bg-background flex w-full flex-col items-center py-10">
      <InnerContent>
        <div className="flex w-full justify-center">
          <H2 id={PageSection.about}>About</H2>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row">
          <div className="mb-[-50px] mt-[-60px] sm:mb-0 sm:mt-[-75px] md:mt-[-100px]">
            <Image
              alt="Caitlyn About Image"
              width={837}
              height={1160}
              src="/about.png"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <H3>HI!</H3>
              <H3>I&apos;m Caitlyn Doyle</H3>
            </div>

            <P>
              A UX designer who transitioned from digital marketing, where I
              discovered my love for design. I&apos;ve always been naturally
              creative and enjoy tackling new challenges - repating the same
              tasks every day isn&apos; for me.
            </P>

            <P>
              My journey into UX began with exploring Figma and design
              principles while working in marketing, and the balance of
              creativity, structure, and logic hooked me.
            </P>

            <P>
              For me, UX design is like building a puzzle. Each piece comes
              together, constantly improving to form the best possible solution.
              My design style is simple and user-focused, always aiming to make
              things as easy as possible for the end user.
            </P>

            <P>
              When I&apos;m not designing, you can find me at the beach or, if
              it&apos;s a rainy day, curled up with a good book.
            </P>
          </div>
        </div>
      </InnerContent>
    </section>
  );
}
