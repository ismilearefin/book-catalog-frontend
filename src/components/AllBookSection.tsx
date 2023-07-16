/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { IBook } from "../interface/Ibook";


export default function AllBookSection() {
  
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
      <div className="grid grid-cols-5 gap-5 pb-10 px-14">
        {books.map((book) => <BookCard book={book}></BookCard>)}
      </div>
    </div>
  );
}
