/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from "react";

export default function AllBooks() {
  interface IBook {
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
  }
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./public/books.json");
        const data: IBook[] = await response.json();
        setBooks(data);
      } catch (error) {
        console.log("Error fetching book data:", error);
      }
    };

    void fetchData();
  }, []);
  console.log(books);
  return (
    <div className="grid justify-center min-h-screen">
      <h1 className="text-center text-5xl pt-10">Explore the world of books</h1>
      <div className="grid grid-cols-5 gap-5 pb-10">
        {books.map((book) => (
          <div
            key={book.publicationDate}
            className="border hover:shadow-lg p-4 rounded min-h-[150px] grid justify-between items-end"
          >
            <h3 className="text-3xl">
              {book.title.length > 15
                ? `${book.title.slice(0, 15)}...`
                : book.title}
            </h3>
            <div>
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
              <p>{book.publicationDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
