"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { IdCard, SquarePlus } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/80" /> {/* Dark overlay */}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-32 pb-28 mt-10 sm:pb-40 text-center">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight tracking-tight">
            Unlimited eBooks, audiobooks, and more
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200">
            Starts at $24.99. Cancel Anytime.
          </p>

          {/* Email Input + Button */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-2 rounded-md text-black w-72"
            />
            <Button className="px-6 py-2">Get Started</Button>
          </div>

          {/* Onboarding Steps */}
          <div className="mt-12 flex flex-col pb-18 sm:flex-row gap-6 justify-center items-center text-sm text-gray-300">
            <div className="justify-center flex-col flex items-center gap-2">
              <SquarePlus />
              <h1>Hello</h1>
              <p>hi hellofnjkn nces</p>
            </div>
            <div className="justify-center flex-col flex items-center gap-2">
              <IdCard />
              <h1>Hello</h1>
              <p>hi hellofnjkn nces</p>
            </div>
            <div>
              <h1>Hello</h1>
              <p>hi hellofnjkn nces</p>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10">
        <Image
          src="/herogra.svg"
          alt="Bottom Mask"
          width={1920}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
