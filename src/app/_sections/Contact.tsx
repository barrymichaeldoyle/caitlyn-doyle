import Link from "next/link";
import { H2, P } from "~/components/typography";
import { linkedin, youtube } from "~/constants/links";
import { InnerContent } from "~/layout/InnerContent";
import { PageSection } from "~/types";

export function ContactSection() {
  return (
    <section
      id={PageSection.contact}
      className="flex w-full scroll-mt-10 flex-col gap-6 p-10"
    >
      <InnerContent>
        <H2>Let&apos;s Connect!</H2>
        <P>
          I&apos;m willing to chat and collaborate. I&apos;m always open to
          <br />
          exploring exciting projects and roles.
        </P>
      </InnerContent>
    </section>
  );
}
