import { H2 } from "~/components/typography";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-10">
      <H2 id="work">Work</H2>
      <H2 id="about">About</H2>
      <H2 id="contact">Contact</H2>
    </div>
  );
}
