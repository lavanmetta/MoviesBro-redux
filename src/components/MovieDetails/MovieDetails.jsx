import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieDetails,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import "./MovieDetails.scss";
import { ThreeDots } from "react-loader-spinner";

function MovieDetails() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
console.log(data.Ratings)
  useEffect(() => {
    dispatch(fetchAsyncMovieDetails(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div>
      {Object.keys(data).length === 0 ? (
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
        <div className="details-main-container">
          <div className="img-container">
            <div>
              <img src={data.Poster} alt="img" />
            </div>
          </div>
          <div className="details-container">
            <div className="tp">
              <h2>{data.Title}</h2>
              <p>{data.Plot}</p>
            </div>
            <div className="line-one">
              <p>
                <i className="ri-team-line"></i> <span> {data.Actors}</span>
              </p>
              <p>
                <i className="ri-flag-line"></i> <span> {data.Country}</span>
              </p>
              <p>
                <i className="ri-movie-2-line"></i> <span> {data.Director}</span>
              </p>
            </div>

            <div className="ratings">
              <div className="one">
                <div className="round">
                  <h5>{data.imdbRating}</h5>
                </div>
                <p>IMDB</p>
              </div>
              {
                
                data.Ratings.map((each, index) => {
                  return (
                    <div className="one" key={index}>
                      <div className="round">
                        <h5>{each.Value}</h5>
                      </div>
                      <p>{each.Source.length > 10 ? each.Source.slice(0, 10) + '.....' : each.Source}</p>
                    </div>
                  );
                })
              }
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
