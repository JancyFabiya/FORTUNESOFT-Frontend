import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../redux/slices/moviesSlice';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.css';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const status = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMovies());

    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="movie-list">
      <h2>Movies</h2>
      <div className="movies-container">
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie.movies} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
