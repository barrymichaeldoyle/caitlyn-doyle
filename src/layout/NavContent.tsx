"use client";

import Link from "next/link";

import { cn } from "~/lib/utils";
import { PageSection } from "~/types";

export function NavContent(props: { onClick?: () => void }) {
  return [PageSection.about, PageSection.projects, PageSection.contact].map(
    (section) => (
      <Link
        key={section}
        href={`#${section}`}
        className={cn(
          "hover:text-background relative w-fit border-b-2 transition-colors duration-300",
          "border-b-primary-500",
        )}
        onClick={(e) => {
          e.preventDefault();
          document
            .querySelector(`#${section}`)
            ?.scrollIntoView({ behavior: "smooth" });
          props.onClick?.();
        }}
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </Link>
    ),
  );
}
