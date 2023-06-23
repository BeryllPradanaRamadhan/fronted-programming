import { configureStore } from "@reduxjs/toolkit";
import moviesReducers from "../features/movieSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducers,
  },
});

export default store;
