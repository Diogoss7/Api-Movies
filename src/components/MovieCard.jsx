import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './styleMovie.css';

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movies }) => {
  const addMovieToLocalStorage = (movie) => {
    const moviesSeen = JSON.parse(localStorage.getItem('moviesSeen')) || [];
    if (!moviesSeen.some((seenMovie) => seenMovie.id === movie.id)) {
      moviesSeen.push(movie);
      localStorage.setItem('moviesSeen', JSON.stringify(moviesSeen));
    }
  };

  return (
    <div className="movie-card">
      {movies.map((movie) => (
        <div key={movie.id} className="card">
          <img
            src={`${imageUrl}${movie.poster_path}`}
            className="card-image"
          />
          <div className="card-content">
            <div className="card-rating">
              <FaStar className="star-icon" />
              {movie.vote_average}
            </div>
            <Link
              to={`/movie/${movie.id}`}
              className="card-link"
              onClick={() => addMovieToLocalStorage(movie)}
            >
              Detalhes
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
