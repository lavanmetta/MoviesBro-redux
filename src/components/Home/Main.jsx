import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  fetchAsyncMarvelMovies,
  fetchAsyncMarvelShows,
  getMarvelShows,
  getMarvelUniverse,
} from "../../features/movies/movieSlice";
import PopularCard from "../MovieCard/PopularCard";
import { settings } from "../../common/Settings";
import "./Home.scss";
function Main() {
  const dispatch = useDispatch();
  const movieText = "Marvel";
  const showText = "Marvel";
  useEffect(() => {
    dispatch(fetchAsyncMarvelMovies(movieText));
    dispatch(fetchAsyncMarvelShows(showText));
  }, [dispatch]);

  const marvelMovies = useSelector(getMarvelUniverse);
  const marvelShows = useSelector(getMarvelShows);

  let renderMarvelMovies = "",
    renderMarvelShows = "";

  renderMarvelMovies =
    marvelMovies.Response === "True" ? (
      marvelMovies.Search.map((movie, index) => (
        <PopularCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{marvelMovies.Error}</h3>
      </div>
    );

  renderMarvelShows =
    marvelShows.Response === "True" ? (
      marvelShows.Search.map((movie, index) => (
        <PopularCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{marvelShows.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="links-of-ms">
        <Link to="/movies">Movies</Link>
        <Link to="/shows">Shows</Link>
      </div>
      <div className="movie-list">
        <h2>
          Marvel Cinematic Universe
          <i className="ri-arrow-right-double-line"></i>
        </h2>
        <div className="Marvel-m">
          <Slider {...settings}>{renderMarvelMovies}</Slider>
        </div>
      </div>
      <div className="movie-list">
        <h2>
          Marvel Shows <i className="ri-arrow-right-double-line"></i>
        </h2>

        <div className="Marvel-m">
          <Slider {...settings}>{renderMarvelShows}</Slider>
        </div>
      </div>
    </div>
  );
}

export default Main;
