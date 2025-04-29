"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PageSection } from "~/types";
import { cn } from "~/lib/utils";

export function NavContent(props: { onClick?: () => void }) {
  const [activeSection, setActiveSection] = useState<PageSection | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection((entry.target.id as PageSection) || null);
          }
        });
      },
      { threshold: 1 },
    );

    document.querySelectorAll("h1[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {Object.values(PageSection).map((section) => (
        <Link
          key={section}
          href={`#${section}`}
          className={cn(
            "hover:text-background relative w-fit border-b-1 transition-colors duration-300",
            activeSection === section
              ? "border-b-white"
              : "border-b-primary-500",
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
          {activeSection === section && (
            <span className="bg-background absolute bottom-0 left-0 h-0.5 w-full" />
          )}
        </Link>
      ))}
    </>
  );
}
