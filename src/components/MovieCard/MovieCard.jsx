import React from 'react'
import './MovieCard.scss'
import { Link } from 'react-router-dom'
function MovieCard(props) {
  const {data} = props
  
  return (
    <div className="movie-card">
    <Link to={`/movie/${data.imdbID}`}>
      <div className='poster'>
      <img src={data.Poster} alt="movie" />
      <h4>{data.Title}</h4>
      </div>
      </Link>
    </div>
  )
}

export default MovieCard
