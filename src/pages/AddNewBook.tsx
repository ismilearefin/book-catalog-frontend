// import { FormEvent } from "react";


export default function AddNewBook() {

function handleBook(e:any){
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const publicationDate = form.publicationDate.value;
    const details = form.details.value;
    const NewBook = {
       title:  title,
        author: author,
        genre: genre,
        publicationDate: publicationDate,
        details: details
    }
    form.reset()
    console.log(NewBook)
    console.log(title, author, genre, publicationDate, details);
}



  return (
    <div className="my-8 grid justify-center items-center">
        <div className="w-[400px]">
        <div className="">
            <form onSubmit={(e)=>handleBook(e)} className="grid">
                <label className="mb-1">Title</label>
                <input type="text" required name="title"  className="mb-2 border p-2"></input>
                <label className="mb-1">Author</label>
                <input type="text" required name="author" className="mb-2 border p-2"></input>
                <label className="mb-1">Genre</label>
                <input type="text" required name="genre" className="mb-2 border p-2"></input>
                <label className="mb-1">Publication Date</label>
                <input type="number" required name="publicationDate" className="mb-2 border p-2"></input>
                <label>About Book</label>
                <textarea  placeholder="Your text.." required name="details" className="border p-6 mb-2"></textarea>
                <button className="btn-primary py-3">Submit</button>
            </form>
        </div>
        </div>

    </div>
  )
}
