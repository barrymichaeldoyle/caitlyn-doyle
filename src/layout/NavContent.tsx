"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PageSection } from "~/types";

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
      { threshold: 0.5 },
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return [PageSection.about, PageSection.work, PageSection.contact].map(
    (section) => (
      <Link
        key={section}
        href={`#${section}`}
        className={`relative w-fit border-b-2 ${
          activeSection === section ? "border-b-white" : "border-b-primary-500"
        } hover:text-background transition-colors duration-300`}
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
    ),
  );
}
