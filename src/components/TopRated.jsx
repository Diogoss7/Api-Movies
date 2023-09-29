import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import "./styleMovieCard.css";
const imageUrl = import.meta.env.VITE_IMG;

const TopRated = ({ topRateds }) => {
  console.log(topRateds)
  const addMediaToLocalStorage = (topRated) => {
    const moviesSeen = JSON.parse(localStorage.getItem('moviesSeen')) || [];
    if (!moviesSeen.some((seenMovie) => seenMovie.id === topRated.id)) {
      moviesSeen.push(topRated);
      localStorage.setItem('moviesSeen', JSON.stringify(moviesSeen));
    }
  };

  return (
    <div className="movie-card">
      {topRateds.map((topRated, index) => (
        index < 14 && (
          <div key={topRated.id} className="card">
            <Link
              to={`/movie/${topRated.id}`}
              onClick={() => addMediaToLocalStorage(topRated)}
            >
              <img
                src={`${imageUrl}${topRated.poster_path}`}
                className="card-image"
              />
              <div className="card-content">
                <div className="card-rating">
                  <FaStar className="star-icon" />
                  {topRated.vote_average}
                </div>
              </div>
            </Link>
          </div>
        )
      ))}
    </div>
  );
};


export default TopRated;
