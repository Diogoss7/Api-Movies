import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styleMovieCard.css';

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
      {movies.map((movie, index) => (
        index < 14 && (
          <div key={movie.id} className="card">
            <Link
              to={`/movie/${movie.id}`}
              onClick={() => addMovieToLocalStorage(movie)}
            >
              <img
                src={`${imageUrl}${movie.poster_path}`}
                className="card-image"
              />
              <div className="card-content">
                <div className="card-rating">
                  <FaStar className="star-icon" />
                  {movie.vote_average}
                </div>
              </div>
            </Link>
          </div>
        )
      ))}
    </div>
  );
};

export default MovieCard;