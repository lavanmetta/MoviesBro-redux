import React, { useEffect } from "react";
import MoviesListing from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

function Home() {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Harry";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return (
    <div className="banner-bg">
      <MoviesListing />
    </div>
  );
}

export default Home;
