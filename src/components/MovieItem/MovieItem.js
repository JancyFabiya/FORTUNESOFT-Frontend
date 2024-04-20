import React from 'react';
import './MovieItem.css';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      {movie.map(m => (
<>
      <img src={m.poster} alt={m.title} />
      <h3>{m.title}</h3>
      <p>{m.genre}</p>
      </>
      ))}
    </div>
  );
};

export default MovieItem;
