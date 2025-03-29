import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './stylePersonsCard.css'
const imageUrl = import.meta.env.VITE_IMG;

const Persons = ({ persons }) => {

    return (
        <div className="movie-card-person">
            {persons.map((person, index) => (
                index < 9 && (
                    <div key={person.id} className="card-person">
                        <Link  
                         to={`/search/${person.id}`}
                        >
                        <img
                            src={`${imageUrl}${person.profile_path}`}
                            className="card-image-person"
                        />
                        </Link>
                    </div>
                )
            ))}
        </div>
    );
};
Persons.propTypes = {
    persons: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            profile_path: PropTypes.string,
        })
    ).isRequired,
};

export default Persons;