import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* Hero Section  */}
      <div className="flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto px-4 py-10 gap-10">
        {/* Left Text Section */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1c1c] tracking-tight">
            Your Library, Anywhere.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-500">
            Access thousands of titles anytime, on any device — all in one
            platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Button size="lg">Join Now</Button>
            <Button variant="secondary" size="lg" className="hover:shadow-xl">
              Explore More
            </Button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/hero.svg"
            width={500}
            height={500}
            alt="Hero section image"
            className="w-full h-auto max-w-md sm:max-w-lg md:max-w-full"
            priority
          />
        </div>
      </div>
      {/* Feture Section */}
    </div>
  );
}
