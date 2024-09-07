import { H1 } from "~/components/typography";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      <H1 id="work">Work</H1>
      <H1 id="about">About</H1>
      <H1 id="contact">Contact</H1>
    </div>
  );
}
