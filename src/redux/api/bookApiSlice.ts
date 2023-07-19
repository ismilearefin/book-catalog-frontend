import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://book-catalog-backend-rouge.vercel.app/api/v1/book" }),
  tagTypes:['book'],
  endpoints: (builder) => ({
    createBook:builder.mutation({
      query:(book)=>({
        url: "/create-book",
        method: "POST",
        body: book,
      }),
      invalidatesTags:['book']
    }),
    updateBook:builder.mutation({
      query:({id,...book})=>({
        url: `/updateBook/${id}`,
        method: "PATCH",
        body: book,
      }),
      invalidatesTags:['book']
    }),
    deleteBook:builder.mutation({
      query:(id)=>({
        url: `/deleteBook/${id}`,
        method: "DELETE",
        
      }),
    }),
    getBook: builder.query({
      query: () => "/getall-book",
      providesTags:['book']
    }),
    getSingleBook: builder.query({
      query: (id) => `getSingle-book/${id}`,
      providesTags:['book']
    }),
  }),
});

export const { useDeleteBookMutation,useGetBookQuery, useGetSingleBookQuery,useCreateBookMutation,useUpdateBookMutation } = BookApi;
