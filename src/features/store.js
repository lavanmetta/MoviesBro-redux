import { configureStore } from "@reduxjs/toolkit";
import moviesReducers from "./movies/movieSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducers,
  },
});
