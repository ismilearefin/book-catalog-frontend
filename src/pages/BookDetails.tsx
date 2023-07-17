import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../redux/api/bookApiSlice";


export default function BookDetails() {
  const params = useParams();
  const {data,isLoading} = useGetSingleBookQuery(params.id)
  
  
  if(isLoading){
    <h1>Loading...</h1>
  }
  
  if (!data) {
    return <p className="text-center text-lg text-slate-500 my-10">Wait a moment..</p>; // or display an appropriate fallback if no data is available
  }
  const {title,author,genre,publicationDate,details} = data.data;

  return (
    
     <>
     {data && 
      <div className="grid gap-4 my-8 mx-6">
      
      <h1 className="text-center text-4xl">{title}</h1>
      <p className="text-center text-lg">{details}</p>
      <div className="flex flex-row-reverse justify-between">
      <div className="">
        <p >{author}</p>
        <p>{publicationDate}</p>
      </div>
      <p>Genre: {genre}</p>
      </div>
    </div>
     }

    



     </>
    
  )
    }
