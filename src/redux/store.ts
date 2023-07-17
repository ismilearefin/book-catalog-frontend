import { configureStore } from '@reduxjs/toolkit'
// import bookReducer from './features/book/bookSlice';
import { BookApi } from './api/bookApiSlice';
// ...

export const store = configureStore({
  reducer: {
    // book: bookReducer,
    [BookApi.reducerPath]:BookApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BookApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch