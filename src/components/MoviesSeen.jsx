import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import './styleMovieSeen.css'; 
import { Link } from 'react-router-dom';

const imageUrl = import.meta.env.VITE_IMG;

const MoviesSeen = () => {
  const maxMoviesSeen = 5;
  const [moviesSeen, setMoviesSeen] = useState([]);

  useEffect(() => {
    const storedMoviesSeen = JSON.parse(localStorage.getItem('moviesSeen')) || [];
    setMoviesSeen(storedMoviesSeen.slice(-maxMoviesSeen));
  }, []);

  return (
    <div className="movies-seen-card"> 
      {moviesSeen.map((movie) => (
        <div key={movie.id} className="card">
          <Link to={`/movie/${movie.id}`}>
          <img
            src={`${imageUrl}${movie.poster_path}`}
            className="card-image"
            alt={movie.title}
          />
          </Link>
          <div className="card-content">
            <div className="card-rating">
              <FaStar className="star-icon" />
              {movie.vote_average}
            </div>
            <div className="card-title">{movie.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesSeen;
