import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CharacterCard({ character }) {
  const getTagClass = (affiliation) => {
    if (affiliation === 'Hero') return 'card__tag--hero';
    if (affiliation === 'Villain') return 'card__tag--villain';
    return 'card__tag--neutral';
  };

  return (
    <Link 
      to={`/character/${character.id}`}
      className="card"
      data-testid="character-card"
    >
      <div className="card__image-container">
        <img 
          src={character.image} 
          alt={character.name}
          className="card__image"
        />
      </div>
      
      <div className="card__content">
        <h2 className="card__title">{character.name}</h2>
        
        <div className="card__info-item">
          <span className="card__info-label">Raza:</span>
          <span className="card__info-value">{character.race}</span>
        </div>
        
        <div className="card__info-item">
          <span className="card__info-label">Género:</span>
          <span className="card__info-value">{character.gender}</span>
        </div>
        
        <div className="card__footer">
          <span className={`card__tag ${getTagClass(character.affiliation)}`}>
            {character.affiliation}
          </span>
          
          <span className="card__link">
            Ver detalles
            <span className="card__link-icon">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    affiliation: PropTypes.string,
  }).isRequired,
};

export default CharacterCard; 