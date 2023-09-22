import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./styleMovie.css";
import PropTypes from "prop-types"; // Importe PropTypes

const imageUrl = import.meta.env.VITE_IMG;

const SearchMovieCard = ({ searchData }) => {
  return (
    <div className="movie-card">
      {searchData.map((movie) => (
        <div key={movie.id} className="card">
          <img src={`${imageUrl}${movie.poster_path}`} className="card-image" />
          <div className="card-content">
            <div className="card-rating">
              <FaStar className="star-icon" />
              {movie.vote_average}
            </div>
            <Link to={`/movie/${movie.id}`} className="card-link">
              Detalhes
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

SearchMovieCard.propTypes = {
  searchData: PropTypes.array.isRequired,
};

export default SearchMovieCard;
