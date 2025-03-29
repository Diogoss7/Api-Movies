import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import Trailer from '../components/Trailer';
import './MovieDetails.css';

const moviesURL = import.meta.env.VITE_API_MOVIE;
const apiToken = import.meta.env.VITE_API_TOKEN;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;
const trailerUrl = import.meta.env.VITE_VIDEO;

const MoviesDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerMovie, setTrailerMovie] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeModalOutside = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const getTrailer = async () => {
    try {
      const trailer = `${trailerUrl}${id}/videos?${apiKey}`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiToken}`,
        },
      };
      const responseTrailer = await fetch(trailer, options);
      const dataTrailer = await responseTrailer.json();

      filterTrailer(dataTrailer.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTrailer();
  }, []);

  const filterTrailer = (dataTrailer) => {
    const OfficialTrailer = dataTrailer.find((movie) =>
      /(?:trailer||official)/i.test(movie.name)
    );
    setTrailerMovie(OfficialTrailer.key);
  };

  useEffect(() => {
      const getMovie = async () => {
        try {
          const movieUrl = `${moviesURL}${id}?${apiKey}`;
          const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${apiToken}`,
            },
          };
  
          const response = await fetch(movieUrl, options);
          const data = await response.json();
          setMovie(data);
        } catch (error) {
          console.error(error);
        }
      };
  
      getMovie();
    }, [id]);

  return (
    <div>
        {movie && (
          <div className='container-movie-details'>
          <div className="card-movie-details">
            <div className="container-image-movie">
              <img
                src={`${imageUrl}${movie.poster_path}`}
                className="card-image-movie"
                alt={movie.title} 
              />
            </div>
            <div className='datails'>
              <div className="card-title-details">{movie.title}</div>
              <div className="card-property-details">
                Gêneros: {movie.genres.map((genre) => genre.name).join(', ')} <br />
                Data de Lançamento: {movie.release_date} <br />
                Duração: {movie.runtime} minutes
              </div>
              <div className='sinopse'>
                {movie.overview}
              </div>
              <div className='trailer'>
                <button onClick={openModal}>
                  <BsFillPlayCircleFill size={40} className='icon-play'/> 
                  reproduzir trailer
                </button>
              </div>
            </div>
          </div>
          </div>
        )}

      {isModalOpen && (
        <div className="modal" onClick={closeModalOutside}>
          <Trailer videoId={`${trailerMovie}`} />
        </div>
      )}
    </div>
  );
};

export default MoviesDetails;
