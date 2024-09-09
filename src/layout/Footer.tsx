import { YouTubeIcon } from "~/icons/Youtube";
import { LinkedInIcon } from "~/icons/LinkedIn";
// import { DribbbleIcon } from "~/icons/Dribbble";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto bg-primary-500 p-4 text-neutral-100 sm:px-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex gap-6">
          <Link href="https://www.youtube.com/@createwithcaity" target="_blank">
            <YouTubeIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/caitlyn-doyle-988695167/"
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
          {/* <Link href="https://dribbble.com/Cait_Doyle" target="_blank">
            <DribbbleIcon />
          </Link> */}
        </div>
        <p className="text-xs">
          Copyright &copy; Caitlyn Doyle {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
