import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./styleMovieCard.css";
import PropTypes from "prop-types";

const imageUrl = import.meta.env.VITE_IMG;

const SearchMovieCard = ({ searchData }) => {
  const addMovieToLocalStorage = (movie) => {
    const moviesSeen = JSON.parse(localStorage.getItem('moviesSeen')) || [];
    if (!moviesSeen.some((seenMovie) => seenMovie.id === movie.id)) {
      moviesSeen.push(movie);
      localStorage.setItem('moviesSeen', JSON.stringify(moviesSeen));
    }
  };
  return (
    <div className="movie-card">
      {searchData.map((movie) => (
        <div key={movie.id} className="card">
          <Link to={`/movie/${movie.id}`}
            onClick={() => addMovieToLocalStorage(movie)}>
            <img src={`${imageUrl}${movie.poster_path}`} className="card-image" />
            <div className="card-content">
              <div className="card-rating">
                <FaStar className="star-icon" />
                {movie.vote_average}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
SearchMovieCard.propTypes = {
  searchData: PropTypes.array.isRequired,
};

export default SearchMovieCard;
