import Features from "@/components/Feature/Features";
import Hero from "@/components/Hero/Hero";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* Hero Section  */}
      <Hero />
      {/* Feture Section */}
      <Features />
    </div>
  );
}
