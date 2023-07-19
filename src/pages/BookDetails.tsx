/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../redux/api/bookApiSlice";
import {
  useCreateCommentMutation,
  useGetAllCommentsQuery,
} from "../redux/api/commentApiSlice";
import { useAppSelector } from "../hooks/hook";

export default function BookDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const [createComment, { isLoading: commentLoading }] =
    useCreateCommentMutation();
  const [deleteBook] = useDeleteBookMutation();
  const { data, isLoading } = useGetSingleBookQuery(params.id);
  const { data: comment, isLoading: loading } = useGetAllCommentsQuery(
    params.id
  );

  if (isLoading) {
    <h1>Loading...</h1>;
  }

  if (!data) {
    return (
      <p className="text-center text-lg text-slate-500 my-10">
        Wait a moment..
      </p>
    );
  }
  if (loading) {
    <h1>Loading...</h1>;
  }

  if (!comment) {
    return (
      <p className="text-center text-lg text-slate-500 my-10">
        Wait a moment..
      </p>
    );
  }
  const { title, author, genre, publicationDate, details, _id } = data.data;

  function handleComment(e: any) {
    e.preventDefault();
    const form = e.target;
    const text = form.comment.value;
    const comment = {
      id: _id,
      comment: text,
    };
    createComment({ comment });
    form.reset();
  }

  const handleDelete = () => {
    if(user.email){
      const confirm = window.confirm("Are you sure you want to delete this?");
    if (confirm) {
      deleteBook(params.id)
        .unwrap()
        .then(() => {
          window.alert("successfully deleted book");
          navigate("/allbooks");
          // Perform any necessary actions after successful deletion
        })
        .catch((error) => {
          console.error("Error deleting book:", error);
          // Handle the error if needed
        });
    }
    }else{
      window.alert('Please login first')
    }
    
  };
  console.log(!user.email);

  return (
    <div className="min-h-screen">
      {data && (
        <div className="grid gap-4 my-8 mx-10 ">
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
      <div className="grid grid-cols-2 justify-around mx-10">
        <Link to={`/edit-book/${params.id}`} className="link text-blue-800">
          Edit
        </Link>
        <button 
          onClick={handleDelete}
          className="link text-rose-700 text-right"
        >
          Delete
        </button>
      </div>
      <div>
        <div className="m-6">
          <h2 className="ml-4 pb-1">Add a Comment</h2>
          <form onSubmit={(e) => handleComment(e)} className="flex ml-4">
            <textarea
              disabled={!user.email}
              name="comment"
              className="w-1/3 border p-1"
              placeholder="comment..."
            ></textarea>
            <button disabled={!user.email} className="px-8 btn-primary">
              {commentLoading ? "Submitting..." : "Submit"}
            </button>
          </form>
          <ul className="list-disc m-4">
            {!user.email && (
              <p className="text-gray-400 ">
                You are unable to comment ! Please login first
              </p>
            )}
            {comment.data.length ? (
              comment.data.map((text: any) => (
                <li key={text._id}>{text.comment}</li>
              ))
            ) : (
              <p className="text-gray-400 ">No Comments...</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
