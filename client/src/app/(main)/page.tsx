import Hero from "@/components/Hero/Hero";
import FaqAccordion from "@/components/Landing/FaqAccordion";
import TopFeatures from "@/components/Landing/TopFeatures";
import Trandingnow from "@/components/Landing/Trandingnow";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Trandingnow />
      <TopFeatures />
      <FaqAccordion />
    </div>
  );
}
