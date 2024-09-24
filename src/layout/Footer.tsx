import { YouTubeIcon } from "~/icons/Youtube";
import { LinkedInIcon } from "~/icons/LinkedIn";
import { DribbbleIcon } from "~/icons/Dribbble";

import Link from "next/link";
import { dribble, linkedin, youtube } from "~/constants/links";
import { InnerContent } from "./InnerContent";

export function Footer() {
  return (
    <footer className="flex justify-center bg-primary-500 text-neutral-100">
      <InnerContent>
        <div className="flex items-center justify-between p-4 px-6">
          <div className="flex gap-6">
            <Link href={youtube} target="_blank">
              <YouTubeIcon />
            </Link>
            <Link href={linkedin} target="_blank">
              <LinkedInIcon />
            </Link>
            <Link href={dribble} target="_blank">
              <DribbbleIcon />
            </Link>
          </div>
          <p className="text-xs">
            Copyright &copy; Caitlyn Doyle {new Date().getFullYear()}
          </p>
        </div>
      </InnerContent>
    </footer>
  );
}
