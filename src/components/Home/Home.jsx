import React, { useEffect } from "react";
import MoviesListing from "../MovieListing/MovieListing";
import movieApi from "../../common/Apis/MovieApi";
import { APIKey } from "../../common/Apis/MovieApiKey";

function Home() {
  const movieText = "Harry";
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
      )
      .catch((err) => {
        console.log("Err" + err)
      })
      console.log(response)
    };

    fetchMovies()
  }, []);

  return (
    <div className="banner-bg">
      <MoviesListing />
    </div>
  );
}

export default Home;
