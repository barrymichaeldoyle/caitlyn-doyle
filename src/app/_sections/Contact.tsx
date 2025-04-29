import { ContactItem } from "~/components/ContactItem";
import { H2, P } from "~/components/typography";
import { email, linkedin, resume, youtube } from "~/constants/links";
import { InnerContent } from "~/layout/InnerContent";
import { PageSection } from "~/types";

export function ContactSection() {
  return (
    <section
      id={PageSection.contact}
      className="flex w-full scroll-mt-10 flex-col items-center gap-6 p-10"
    >
      <InnerContent>
        <H2>Let&apos;s Connect!</H2>
        <P>
          I&apos;m willing to chat and collaborate. I&apos;m always open to
          <br />
          exploring exciting projects and roles.
        </P>
        <div className="my-4 flex flex-row gap-5">
          <ContactItem
            imageSrc="/contact/email.webp"
            label="Email"
            link={email}
          />
          <ContactItem
            imageSrc="/contact/resume.webp"
            label="Resume"
            link={resume}
          />
          <ContactItem
            imageSrc="/contact/linkedin.webp"
            label="LinkedIn"
            link={linkedin}
          />
          <ContactItem
            imageSrc="/contact/youtube.webp"
            label="YouTube"
            link={youtube}
          />
        </div>
      </InnerContent>
    </section>
  );
}
