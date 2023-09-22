import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa';
import Trailer from '../components/Trailer';
import './Movie.css'
const moviesURL = import.meta.env.VITE_API_MOVIE;
const apiToken = import.meta.env.VITE_API_TOKEN;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;
const trailerUrl = import.meta.env.VITE_VIDEO


const Movies = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState(null)
  const [trailerMovie, setTrailerMovie] = useState();

  const getTrailer = async () => {

    try {
      const trailer = `${trailerUrl}${id}/videos?${apiKey}`
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
      };
      const responseTrailer = await fetch(trailer, options);
      const dataTrailer = await responseTrailer.json();

      filterTrailer(dataTrailer.results)
    } catch (error) {
      console.error(error);
    }


  }
  useEffect(() => {
    getTrailer();
  }, [])

  const filterTrailer = (dataTrailer) => {
    var oficialTrailer = dataTrailer.find((movie) => movie.name.includes('Trailer'));
    setTrailerMovie(oficialTrailer.key)
  

  }


  const getMovie = async () => {
    try {
      const movieUrl = `${moviesURL}${id}?${apiKey}`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
      };

      const response = await fetch(movieUrl, options);
      const data = await response.json();
      setMovie(data);
      //  console.log(data);

    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getMovie();

  }, [])
  return (
    <div>{movie && (
      <div className="conteiner-movie">
        <div className="card-movie-details">
          {/* <img src={`${imageUrl}${movie.poster_path}`} className="card-image-details" alt={movie.title} /> */}
        <Trailer videoId={`${trailerMovie}`} />
          <h2 className="card-title-details">{movie.title}</h2>
          <div className="card-rating-details">
            <FaStar className="star-icon-details" />
            {movie.vote_average}
          </div>
          <p className="card-description-details">{movie.overview}</p>
          <p className="card-property-details">Gêneros: {movie.genres.map((genre) => genre.name).join(', ')}</p>
          <p className="card-property-details">Data de Lançamento: {movie.release_date}</p>
          <p className="card-property-details">Duração: {movie.runtime} minutos</p>
          <p className="card-property-details">Tagline: {movie.tagline}</p>

        </div>
      </div>
    )}</div>
  )
}

export default Movies;