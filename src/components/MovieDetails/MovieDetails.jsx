import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieDetails,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import "./MovieDetails.scss";
function MovieDetails() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieDetails(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div>
      {Object.keys(data).length === 0 ? (
        <div><h1>Loading....</h1></div>
      ) : (
        <div>
          <h1>{data.Title}</h1>
          <p>{data.Plot}</p>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
