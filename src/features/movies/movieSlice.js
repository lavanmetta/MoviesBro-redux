import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/Apis/MovieApi";
import { APIKey } from "../../common/Apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchMyAsyncMovies",

  async (term) => {
    
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );
    return response.data
  }
);

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchMyAsyncShows",
  
    async (term) => {
      
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${term}&type=series`
      );
      return response.data
    }
  );

  export const fetchAsyncMovieDetails = createAsyncThunk(
    "movies/fetchMyAsyncMovieDetails",
  
    async (id) => {
      
      const response = await movieApi.get(
        `?apiKey=${APIKey}&i=${id}&Plot=full`
      );
      return response.data
    }
  );

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {}
    }
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
    [fetchAsyncMovieDetails.fulfilled] : (state, {payload}) => {
      console.log("Fetched Details");
      return {...state, selectedMovieOrShow : payload}
  },
  }
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;

export default movieSlice.reducer;
