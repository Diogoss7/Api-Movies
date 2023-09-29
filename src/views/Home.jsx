import React, { useState, useEffect } from "react";
import getTopRatedMovies from "../service/Movie";
import TopRated from "../components/TopRated";
import MovieCard from "../components/MovieCard";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import MoviesSeen from "../components/MoviesSeen";
import getTopRated from "../service/TopRated";
import getPersons from "../service/Persons";
import Persons from "../components/Persons";
import Trailer from "../components/Trailer";
import "./styleHome.css";

const Home = () => {
  const [responseMovies, setResponseMovies] = useState([]);
  const [responseTopRated, setResponseTopRated] = useState([]);
  const [responsePersons, setResponsePersons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMovies, setShowMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const responseMovies = await getTopRatedMovies();

        const filteredMovies = responseMovies.results.filter((movie) => movie.poster_path);
        setResponseMovies({ results: filteredMovies });

        const moviesSeen = JSON.parse(localStorage.getItem("moviesSeen")) || [];
        setShowMovies(moviesSeen);

        const responseTopRated = await getTopRated();

        const filteredTopRated = responseTopRated.results.filter((topRated) => topRated.poster_path);
        setResponseTopRated({ results: filteredTopRated });

        const responsePersons = await getPersons();

        const filteredPersons = responsePersons.results.filter((person) => person.profile_path
        );
        setResponsePersons({ results: filteredPersons });
        setLoading(true);

      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {showMovies.length > 0 && (
        <div>
          <div className="movies-seen">
            <h2>Visto recentemente:</h2>
          </div>
          <MoviesSeen />
        </div>
      )}
      {loading ? (
        <div>
          <div className="container-max">
            <div className="title"> Sucessos do Cinema </div>
            <div className="container-movie">
              <MovieCard movies={responseMovies.results} />
            </div>
            <div className="title"> Melhores Avaliados </div>
            <div className="container-movie">
              <TopRated topRateds={responseTopRated.results} />
            </div>
            <div className="title"> Conheça os rostos mais famosos de Hollywood </div>
            <div className="container-movie">
              <Persons persons={responsePersons.results} />
            </div>
            <div className="title"> Ultimos Lançamentos</div>
            <div className="container-Trailer">
              <Trailer videoId={"avz06PDqDbM"} />
              <Trailer videoId={"Rt0kp4VW1cI"}/>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        </div>
      )}
    </div>
  );
};

export default Home;
