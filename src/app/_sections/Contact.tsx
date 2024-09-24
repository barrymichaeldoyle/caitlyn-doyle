import Link from "next/link";
import { H2, P } from "~/components/typography";
import { linkedin } from "~/constants/links";
import { InnerContent } from "~/layout/InnerContent";
import { PageSection } from "~/types";

export function ContactSection() {
  return (
    <section className="bg-background flex w-full flex-col items-center gap-6 py-10">
      <H2 id={PageSection.contact}>Let&apos;s Connect!</H2>
      <InnerContent className="flex justify-center p-4">
        <P>
          The best way to get in touch with me is via{" "}
          <Link
            href={linkedin}
            target="_blank"
            className="font-bold text-primary-500"
          >
            LinkedIn here
          </Link>
          .
        </P>
      </InnerContent>
    </section>
  );
}
