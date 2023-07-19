/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {  useGetSingleBookQuery, useUpdateBookMutation } from "../redux/api/bookApiSlice";


export default function EditBook() {
    const params = useParams();
    
    const [updateBook] = useUpdateBookMutation();
    const navigate = useNavigate();
    
    
    
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [publicationDate, setPublicationDate] = useState("");
    const [details, setDetails] = useState("");
    const { data, isLoading } = useGetSingleBookQuery(params.id);

    useEffect(() => {
        if (!isLoading && data) {
          const { title, author, genre, publicationDate, details } = data.data;
          setTitle(title);
          setAuthor(author);
          setGenre(genre);
          setPublicationDate(publicationDate);
          setDetails(details);
        }
      }, [data, isLoading]);
    

    
function handleBookEdit(e:any) {
    e.preventDefault();
    const updatedBook = {
      
      title,
      author,
      genre,
      publicationDate,
      details,
    };

    const id = params.id

    updateBook({id,...updatedBook})
      .unwrap()
      .then((response) => {
        console.log("Book updated:", response);
        navigate("/allbooks");
      })
      .catch((error) => {
        console.error("Error updating book:", error);
      });
console.log(updatedBook)
}

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return (
      <p className="text-center text-lg text-slate-500 my-10">
        Wait a moment..
      </p>
    );
  }

  return (
    <div className="my-8 grid justify-center items-center">
        <h1 className="text-gray-400 text-xl mb-3">Edit {title} Book</h1>
        <div className="w-[400px]">
        <div className="">
            <form onSubmit={handleBookEdit} className="grid">
                <label className="mb-1">Title</label>
                <input type="text" required name="title" onChange={(e) => setTitle(e.target.value)} value={title}  className="mb-2 border p-2"></input>
                <label className="mb-1">Author</label>
                <input type="text" required name="author" onChange={(e) => setAuthor(e.target.value)} value={author} className="mb-2 border p-2"></input>
                <label className="mb-1">Genre</label>
                <input type="text" required name="genre" onChange={(e) => setGenre(e.target.value)} value={genre} className="mb-2 border p-2"></input>
                <label className="mb-1">Publication Date</label>
                <input type="text" required name="publicationDate" onChange={(e) => setPublicationDate(e.target.value)} value={publicationDate} className="mb-2 border p-2"></input>
                <label>About Book</label>
                <textarea  placeholder="Your text.." required value={details} onChange={(e) => setDetails(e.target.value)} name="details" className="border p-6 mb-2"></textarea>
                <button className="btn-primary py-3">Submit</button>
            </form>
        </div>
        </div>
    </div>
  )
}
