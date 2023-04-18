import React from "react";
import { useSelector } from "react-redux";
import {
  getAllMovies,
  getAllShows,
  getIsLoading,
} from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const isLoading = useSelector(getIsLoading);
  
  let renderMovies = "",
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="movies-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="links-of-ms">
        <Link to="/movies">Movies</Link>
        <Link to="/shows">Shows</Link>
      </div>

      {isLoading ? ( 
        <div className="loader">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#ffffff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div> 
      ) : (
        <>
          <div className="movie-list">
            <h2>
              Popular Movies <i className="ri-arrow-right-double-line"></i>
            </h2>
            <div className="movie-container">{renderMovies}</div>
          </div>
          <div className="movie-list">
            <h2>
              Popular Shows <i className="ri-arrow-right-double-line"></i>
            </h2>
            <div className="movie-container">{renderShows}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieListing;
