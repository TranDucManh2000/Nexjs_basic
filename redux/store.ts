import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../pages/features/counter/counterSlice";
import authenSlice from "../pages/features/login/authenSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    authenticator: authenSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
