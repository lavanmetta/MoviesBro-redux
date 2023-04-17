import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";
function PopularCard(props) {
  const { data } = props;

  return (
    <div className="movie-card">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="poster">
          <img src={data.Poster} alt="movie" />
          <div className="data">
            <p className='m-t'> {data.Title.length > 24 ? data.Title.slice(0, 20) + '.....' : data.Title}</p>
            <p className='m-y'>{data.Year}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PopularCard;
