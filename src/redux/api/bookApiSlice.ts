import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const BookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/book' }),
    endpoints: (builder) => ({
        getBook: builder.query({
            query : () => "/getall-book",
    }),
      }),
    })


    export const {useGetBookQuery} = BookApi