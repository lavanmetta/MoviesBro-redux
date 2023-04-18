import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/Apis/MovieApi";
import { APIKey } from "../../common/Apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchMyAsyncMovies",

  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchMyAsyncShows",

  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMovieDetails = createAsyncThunk(
  "movies/fetchMyAsyncMovieDetails",

  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

export const fetchAsyncMarvelMovies = createAsyncThunk(
  "movies/fetchMyAsyncMarvel",

  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );

    return response.data;
  }
);

export const fetchAsyncMarvelShows = createAsyncThunk(
  "movies/fetchMyAsyncMarvelShows",

  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=series`
    );

    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
  marvelUniverse: {},
  marvelShows: {},
  isLoading: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.movies = payload;
      })
      .addCase(fetchAsyncMovies.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.shows = payload;
      })
      .addCase(fetchAsyncMovieDetails.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.selectedMovieOrShow = payload;
      })
      .addCase(fetchAsyncMarvelMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAsyncMarvelMovies.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.marvelUniverse = payload;
      })
      .addCase(fetchAsyncMarvelShows.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.marvelShows = payload;
      });
  },
  
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;
export const getMarvelUniverse = (state) => state.movies.marvelUniverse;
export const getMarvelShows = (state) => state.movies.marvelShows;
export const getIsLoading = (state) => state.movies.isLoading;

export default movieSlice.reducer;
