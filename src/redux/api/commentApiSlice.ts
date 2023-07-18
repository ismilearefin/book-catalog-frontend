import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CommentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/comments" }),
  endpoints: (builder) => ({
    getAllComments: builder.query({
      query: (id) => `getall-comment/${id}`,
    }),
  }),
});

export const {  useGetAllCommentsQuery } = CommentApi;
