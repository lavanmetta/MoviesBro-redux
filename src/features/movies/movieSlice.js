import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/Apis/MovieApi";
import { APIKey } from "../../common/Apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchMyAsyncMovies",

  async () => {
    const movieText = "Harry";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data
  }
);

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchMyAsyncShows",
  
    async () => {
      const movieText = "Harry";
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=series`
      );
      return response.data
    }
  );

const initialState = {
  movies: {},
  shows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending] : () => {
        console.log("movies pending")
    },
    [fetchAsyncMovies.fulfilled] : (state, {payload}) => {
        console.log("Fetched movies");
        return {...state, movies: payload}
    },
    [fetchAsyncMovies.rejected] : () => {
        console.log("rejected movies");
        
    },
    [fetchAsyncShows.fulfilled] : (state, {payload}) => {
        console.log("Fetched shows");
        return {...state, shows: payload}
    },
  }
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;

export default movieSlice.reducer;
