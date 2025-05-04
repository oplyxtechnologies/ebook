import React from "react";
import { Button } from "../ui/Button";
import BookCard, { Book } from "../Card/Bookcard";

const books: Book[] = [
  {
    id: "1",
    title: "Buy the Book",
    author: "Birendra Bahadur Basnet",
    cover: "/buythebook.jpg",
    rating: 4.7,
  },
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    cover: "/automic.webp",
    rating: 4.9,
  },
  {
    id: "3",
    title: "Deep Work",
    author: "Cal Newport",
    cover: "/deepwork.jpg",
    rating: 4.7,
  },
];

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 tracking-tight">
          Featured Books
        </h2>
        <p className="mt-2 text-gray-500">
          Explore our editor&apos;s picks, top-rated reads, and trending titles.
        </p>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} size="lg" />
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-12 text-center">
        <Button className="px-6 py-3 text-base">Explore More</Button>
      </div>
    </section>
  );
};

export default Features;
