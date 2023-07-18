import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/book" }),
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
    getBook: builder.query({
      query: () => "/getall-book",
      providesTags:['book']
    }),
    getSingleBook: builder.query({
      query: (id) => `getSingle-book/${id}`,
    }),
  }),
});

export const { useGetBookQuery, useGetSingleBookQuery,useCreateBookMutation } = BookApi;
