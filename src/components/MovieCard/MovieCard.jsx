import React from 'react'
import './MovieCard.scss'
function MovieCard(props) {
  const {data} = props
  console.log(data)
  return (
    <div className="movie-card">
      <div className='poster'>
      <img src={data.Poster} alt="movie" />
      <h4>{data.Title}</h4>
      </div>
    </div>
  )
}

export default MovieCard
