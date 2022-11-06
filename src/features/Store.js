import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice"

export const store = configureStore({
    // reducer: moviesReducer,
    reducer: {
        movies: moviesReducer,
    }
})