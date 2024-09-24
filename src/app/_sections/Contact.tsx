import Link from "next/link";
import { H2, P } from "~/components/typography";
import { linkedin, youtube } from "~/constants/links";
import { InnerContent } from "~/layout/InnerContent";
import { PageSection } from "~/types";

export function ContactSection() {
  return (
    <section
      id={PageSection.contact}
      className="bg-background flex w-full scroll-mt-10 flex-col items-center gap-6 py-10"
    >
      <H2>Let&apos;s Connect!</H2>
      <InnerContent className="p-4 text-center">
        <P>
          If you&apos;re looking to collaborate, discuss a project, or have a
          job opportunity, I&apos;d love to hear from you. I&apos;m always open
          to exploring exciting projects and roles. You can also check out{" "}
          <Link href={youtube} target="_blank" className="link">
            my YouTube channel
          </Link>
          , where I share design insights and tips.
        </P>
        <P>
          The best way to get in touch with me is via{" "}
          <Link href={linkedin} target="_blank" className="link">
            LinkedIn here
          </Link>
          .
        </P>
      </InnerContent>
    </section>
  );
}
