import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styleMovieCard.css';
import { addMediaToLocalStorage } from '../utils/localStorangeUtil'; // Reutilização de lógica
import PropTypes from 'prop-types';

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movies }) => {
  return (
    <div className="movie-card">
      {movies.map((movie, index) => (
        index < 14 && (
          <div key={movie.id} className="card">
            <Link
              to={`/movie/${movie.id}`}
              onClick={() => addMediaToLocalStorage(movie.id, 'movies')}
            >
              <img
                src={`${imageUrl}${movie.poster_path}`}
                className="card-image"
                alt={movie.title}
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
MovieCard.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MovieCard;