import Image from "next/image";
import React from "react";

export type Book = {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating?: number;
};

type Props = {
  book: Book;
};

const BookCard: React.FC<Props> = ({ book }) => {
  return (
    <div className="border rounded-lg overflow-hidden p-4 transition-all bg-white hover:bg-gray-100/30 cursor-pointer">
      <Image
        src={book.cover}
        alt={book.title}
        width={500}
        height={282} // A4 ratio: 1:1.41
        className="w-full object-cover aspect-[210/297] rounded-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600">{book.author}</p>
        {book.rating && (
          <p className="text-yellow-500 text-sm mt-1">⭐ {book.rating}/5</p>
        )}
      </div>
    </div>
  );
};

export default BookCard;
