import GenreSection from "@/components/Browse/GenreSection";
import HeroSection from "@/components/Browse/Hero";

const trendingbooks = [
  { src: "/book1.jpg", alt: "1984 by George Orwell" },
  { src: "/book1.jpg", alt: "1984 by George Orwell" },
  { src: "/book1.jpg", alt: "1984 by George Orwell" },
  { src: "/book1.jpg", alt: "1984 by George Orwell" },
  { src: "/book1.jpg", alt: "1984 by George Orwell" },
  // Add more...
];

export default function pricing() {
  return (
    <div className="">
      <HeroSection />
      <GenreSection title="Trending Now" books={trendingbooks} />
      <GenreSection title="Popular Picks" books={trendingbooks} />
    </div>
  );
}
