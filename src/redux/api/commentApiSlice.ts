import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CommentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/comments" }),
  tagTypes:['comment'],
  endpoints: (builder) => ({
    createComment:builder.mutation({
      query:(comment)=>({
        url: "/create-comment",
        method: "POST",
        body: comment,
      }),
      invalidatesTags:['comment']
    }),
    getAllComments: builder.query({
      query: (id) => `getall-comment/${id}`,
      providesTags:['comment']
    }),
  }),
});

export const {  useGetAllCommentsQuery,useCreateCommentMutation } = CommentApi;
