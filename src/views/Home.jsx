import React, { useState, useEffect } from "react";
import getTopRatedMovies from "../service/Movie";
import MovieCard from "../components/MovieCard";
import YouTubeVideo from "../components/YoutubeVideo";
import "./styleHome.css";
import MoviesSeen from "../components/MoviesSeen";

const Home = () => {
  
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMovies, setShowMovies] = useState([]);

  useEffect(() => {

    async function fetchData() {

      try {
      
        const response = await getTopRatedMovies();
        setResponse(response);
        setLoading(false);

        const moviesSeen = JSON.parse(localStorage.getItem('moviesSeen')) || [];
        setShowMovies(moviesSeen);

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
      <div className="container-youtube">
      <div className="text-top"><h1>Conheça os filmes que marcaram época!</h1></div>
        <div className="title"><h1>O Rei Leão</h1></div>
        <YouTubeVideo videoId="J57HnR6FPW0" />
        <div className="text">
          Live action do clássico da Disney, em O Rei Leão, Simba (Donald Glover) é um jovem leão cujo
          destino é se tornar o rei da selva. Entretanto, uma armadilha elaborada por seu tio Scar (
          Chiwetel Ejiofor) faz com que Mufasa (James Earl Jones), o atual rei, morra ao tentar
          salvar o filhote. Consumido pela culpa, Simba deixa o reino rumo a um local distante,
          onde encontra amigos que o ensinam a mais uma vez ter prazer pela vida.
        </div>
      </div>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <div>
          <div className="container-max">
           <div className="container-movie">
            <MovieCard movies={response.results} />
             </div>
              <div className="container-youtube">
              <div className="title"><h1>Besouro Azul</h1></div>
              <YouTubeVideo videoId="IZw2slPIoGs" />
              <div className="text">
                Besouro Azul segue o jovem mexicano Jaime Reyes (Xolo Maridueña) que, recém-formado,
                volta para casa cheio de aspirações para o futuro. Enquanto ele busca seu propósito
                no mundo, o destino o surpreende ao colocar em seu caminho uma antiga relíquia de
                biotecnologia alienígena: o Escaravelho. O besouro alienígena azul escolhe Jaime
                para ser seu hospedeiro simbiótico, o que lhe dá uma armadura
                superpoderosa e lhe garante poderes. O jovem então enfrentará desafios imprevisíveis,
                mudando para sempre seus planos ao se tornar o Super-Herói Besouro Azul.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
