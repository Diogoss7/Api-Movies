import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchMovieCard from "../components/SearchMovieCard";

const moviesURL = import.meta.env.VITE_SEARCH;
const apiToken = import.meta.env.VITE_API_TOKEN;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const fetchMovies = async (query) => {
    try {
      const searchWithQueryURL = `${moviesURL}?query=${query}`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
      };

      const response = await fetch(searchWithQueryURL, options);

      if (!response.ok) {
        console.log("Erro na requisição da API");
        return;
      }

      const data = await response.json();
      console.log(response);
      setMovies(data.results.slice(0, 25));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (query) {
      fetchMovies(query);
    }
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length > 0 && <SearchMovieCard searchData={movies} />}
      </div>
    </div>
  );
};

export default Search;
