"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

const books = [
  "/book1.jpg",
  "/book1.jpg",
  "/book1.jpg",
  "/book1.jpg",
  "/book1.jpg",
  "/book1.jpg",
];

const Trandingnow = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4,
      spacing: 16,
    },
    loop: false,
    mode: "snap",
  });

  return (
    <div className="text-white max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-10">Trending Now</h2>

      <div className=" max-w-6xl mx-auto flex gap-4">
        {/* Left Arrow */}
        <button
          onClick={() => slider.current?.prev()}
          className=" rounded-sm  w-10 bg-[#1d1d1d]/80 hover:bg-[#333] flex items-center justify-center"
        >
          <ArrowLeft />
        </button>

        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider overflow-hidden ">
          {books.map((src, i) => (
            <div
              key={i}
              className="keen-slider__slide shrink-0 flex flex-row gap-2"
            >
              <Image
                src={src}
                alt={`book-${i}`}
                width={160}
                height={240}
                className="rounded-md object-cover mx-auto aspect-[2/3]"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => slider.current?.next()}
          className=" rounded-sm  w-10 bg-[#1d1d1d]/80 hover:bg-[#333] flex items-center justify-center"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Trandingnow;
