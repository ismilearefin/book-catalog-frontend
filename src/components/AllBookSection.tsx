/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import BookCard from "./BookCard";
import { useGetBookQuery } from "../redux/api/bookApiSlice";
import { IBook } from "../interface/Ibook";
import { Link } from "react-router-dom";


export default function AllBookSection() {
  
  const {data, isLoading} = useGetBookQuery(undefined);

if(isLoading){
  <h1>Loading...</h1>
}

  return (
    <div className="grid justify-center min-h-screen">
      <h1 className="text-center text-5xl pt-10">Explore the world of books</h1>
      <div className="grid grid-cols-5 gap-5 pb-10 px-14">
        {data && data.data.map((book:IBook) =><Link to={`/book/${book._id}`}> <BookCard key={book._id} book={book}></BookCard></Link>)}
      </div>
      
    </div>
  );
}
