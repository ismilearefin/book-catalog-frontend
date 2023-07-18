import { configureStore } from "@reduxjs/toolkit";

import { BookApi } from "./api/bookApiSlice";
import { CommentApi } from "./api/commentApiSlice";
// ...

export const store = configureStore({
  reducer: {
    // book: bookReducer,
    [BookApi.reducerPath]: BookApi.reducer,
    [CommentApi.reducerPath]: CommentApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat( BookApi.middleware, CommentApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;


// setupListeners(store.dispatch)