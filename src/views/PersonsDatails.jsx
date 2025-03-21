import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './PersonDetails.css';

const apiToken = import.meta.env.VITE_API_TOKEN;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;

const PersonsDetails = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [holdings, setHoldings] = useState(null);
  const [showFullBiography, setShowFullBiography] = useState(false);

  const fetchPersonDetails = async () => {
    try {
      const responsePerson = await fetch(`https://api.themoviedb.org/3/person/${id}${apiKey}`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiToken}`,
        },
      });

      const dataPerson = await responsePerson.json();
      setPerson(dataPerson);

      const responseHoldings = await fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?language=en-US${apiKey}`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiToken}`,
        },
      });

      const dataHoldings = await responseHoldings.json();
      setHoldings(dataHoldings.crew);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPersonDetails();
  }, []);

  const toggleBiography = () => {
    setShowFullBiography(!showFullBiography);
  };

  return (
    <div>
      {person && (
        <div className="card-person-details">
          <div className="container-image-person-details">
            <img
              src={`${imageUrl}${person.profile_path}`}
              className="card-image-person-details"
              alt={person.name}
            />
          </div>
          <div className="person-details">
            <div className="card-title-details">{person.name}</div>
            <div className="card-property-details">
              Nascido em: {person.birthday}
            </div>
            <div className="card-property-details">
              Local de nascimento: {person.place_of_birth}
            </div>
            <div className="card-property-details">
              Popularidade: {person.popularity}
            </div>
            <div className="biography">
              {showFullBiography
                ? person.biography
                : person.biography.slice(0, 400)}{" "}
              {!showFullBiography && (
                <button className="button-see-more" onClick={toggleBiography}>
                  Ver Mais
                </button>
              )}
            </div>
            {holdings && holdings.length > 0 &&(
            <>
            <div className="card-title-holdings">Conhecido também por</div>
              <div className='container-movie-holding'>
                {holdings.slice(0, 5).map((holding) => (
                  <div key={holding.id} className='movie-holding'>
                    <Link  to={`/movie/${holding.id}`}> 
                    
                    <img
                      src={`${imageUrl}${holding.poster_path}`}
                      className="container-image-holding"
                      alt={holding.title}
                    />
                    </Link>
                  </div>
                ))}
              </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonsDetails;
