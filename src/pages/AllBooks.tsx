import { useEffect, useState } from "react";

import { IBook } from "../interface/Ibook";
import BookCard from "../components/BookCard";

export default function AllBooks() {
  const [value, setValue] = useState("");
  const handleChange = (event: any) => {
    console.log(event.target.value);
  };

  const handleSelect = (event: any) => {
    setValue(event.target.value)
  }
console.log(value)
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
  
  return (
    <div className="flex m-10">
      <div className="w-3/12 border p-2 h-screen shadow">
        <p className="mb-4">Filtering With</p>
        <div className="mb-4">
        <label className="label-text">Genre</label>
        <select onClick={(e)=>handleSelect(e)} value={value} className="select select-primary w-full max-w-xs">
          {books.map((book)=><option key={book.title}>{book.genre}</option>)}
        </select>
        </div>
        <div>
        <label className="label-text">Publication year</label>
        <select onClick={(e)=>handleSelect(e)} value={value} className="select select-primary w-full max-w-xs">
          {books.map((book)=><option key={book.title}>{book.publicationDate}</option>)}
        </select>
        </div>
      </div>
      <div className="w-8/12 mx-auto">
        <input
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder="Search for title, author or genre"
        className="input text-center mb-4 input-bordered w-full"
      />
      <div className="grid grid-cols-4 gap-3">
      {books.map((book) => <BookCard key={book.title} book={book}></BookCard>)}
      </div>
      </div>
    </div>
  );
}
