import React, { useEffect } from "react";
import MoviesListing from "../MovieListing/MovieListing";
import axios from "axios";

function Home() {
  useEffect(() => {
  
  const Url = "http://www.omdbapi.com/?apikey=9c4bb7c6"
    const fetchMovies = async () => {
      const response = await axios.get(Url).catch((err) => {
        console.log(err);
      });
      console.log(response);
    };

    fetchMovies();
  }, []);

  return (
    <div className="banner-bg">
      <MoviesListing />
    </div>
  );
}

export default Home;
