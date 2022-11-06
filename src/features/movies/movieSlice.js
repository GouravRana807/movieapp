import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../comman/apis/movieApi";
import { APIKey } from "../../comman/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    // const movieText = "Harry";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
      // `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );

    // console.log("the response from the API ", response)
    // dispatch(addMovies(response.data));
    return response.data;
  }
);



export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    // const seriesText = "Friends";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=series`
      // `?apiKey=${APIKey}&s=${seriesText}&type=series`
    );
    return response.data;
  }
);





export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&i=${id}&Plot=full`
    );
    return response.data;
  }
);


const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
  // movies: []
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    }
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    //   // {...state, payload}    old redux method
    // },
  },
  extraReducers : {
    [fetchAsyncMovies.pending] : () => {
        console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled] : (state, {payload}) => {
        console.log("fetched successfully");
        return {...state, movies: payload}
    },
    [fetchAsyncMovies.rejected] : () => {
      console.log("Rejected");
  },
  [fetchAsyncShows.fulfilled] : (state, {payload}) => {
    console.log("fetched successfully");
    return { ...state, shows: payload }
},
[fetchAsyncMovieOrShowDetail.fulfilled] : (state, {payload}) => {
  console.log("fetched successfully");
  return {...state, selectMovieOrShow: payload}
},
  }
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getALLMovies = (state) => state.movies.movies;
export const getALLShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.SelectMovieOrShow;
export default movieSlice.reducer;
































