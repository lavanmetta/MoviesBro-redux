import React, { useEffect } from "react";
import MoviesListing from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

function Home() {
  
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(fetchAsyncMovies())
   dispatch(fetchAsyncShows())
  }, [dispatch]);

  return (
    <div className="banner-bg">
      <MoviesListing />
    </div>
  );
}

export default Home;
