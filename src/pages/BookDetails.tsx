import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../redux/api/bookApiSlice";
import { useGetAllCommentsQuery } from "../redux/api/commentApiSlice";


export default function BookDetails() {
  const params = useParams();

  const { data, isLoading } = useGetSingleBookQuery(params.id);
  const { data:comment, isLoading:loading } = useGetAllCommentsQuery(params.id);

  if (isLoading) {
    <h1>Loading...</h1>;
  }

  if (!data) {
    return (
      <p className="text-center text-lg text-slate-500 my-10">
        Wait a moment..
      </p>
    ); // or display an appropriate fallback if no data is available
  }
  if (loading) {
    <h1>Loading...</h1>;
  }

  if (!comment) {
    return (
      <p className="text-center text-lg text-slate-500 my-10">
        Wait a moment..
      </p>
    ); // or display an appropriate fallback if no data is available
  }
  const { title, author, genre, publicationDate, details,_id } = data.data;
  const { comment:text} = comment.data;
console.log(comment.data)
  function handleComment(e:any)  {
    
    e.preventDefault()
    const form = e.target;
    const text = form.comment.value;
    const comment = {
      id:_id,
      comment: text,
    }
    form.reset()
    console.log(comment);
  }

  return (
    <div className="min-h-screen">
      {data && (
        <div className="grid gap-4 my-8 mx-6 ">
          <h1 className="text-center text-4xl">{title}</h1>
          <p className="text-center text-lg">{details}</p>
          <div className="flex flex-row-reverse justify-between">
            <div className="">
              <p>{author}</p>
              <p>{publicationDate}</p>
            </div>
            <p>Genre: {genre}</p>
          </div>
        </div>
      )}
      <div>
        <div className="m-6">
          <h2>Add a Comment</h2>
          <form onSubmit={(e)=>handleComment(e)} className="flex">
            <textarea
              name="comment"
              className="w-1/2 border"
              placeholder="comment..."
            ></textarea>
            
            <button  className="btn btn-primary">Submit</button>
          </form>
          <ul className="list-disc m-4">
            {
              comment ? comment.data.map((text:any) =><li key={text._id}>{text.comment}</li> ): <p>No Comments</p>
            }
          </ul>
        </div>
      </div>
    </div>
  );
}
