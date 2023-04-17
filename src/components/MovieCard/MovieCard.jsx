import React from 'react'
import './MovieCard.scss'
import { Link } from 'react-router-dom'
function MovieCard(props) {
  const {data} = props
  console.log(data)
  return (
    <div className="movie-card">
    <Link to={`/movie/${data.imdbID}`}>
      <div className='poster'>
      <img src={data.Poster} alt="movie" />
     
      <p>{data.Title}</p>
      <p >{data.Year}</p>
     
      
      </div>
      </Link>
    </div>
  )
}

export default MovieCard
