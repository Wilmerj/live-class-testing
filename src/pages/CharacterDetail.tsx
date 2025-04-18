import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getCharacterById } from '../services/api';
import { Character } from '../types';

function CharacterDetail(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const { data: character, isLoading, isError } = useQuery<Character, Error>(
    ['character', id],
    () => getCharacterById(id || ''),
    {
      enabled: !!id
    }
  );

  if (isLoading) {
    return (
      <div className="loading">
        <div className="loading__spinner"></div>
      </div>
    );
  }

  if (isError || !character) {
    return (
      <div className="error">
        <h2 className="error__title">Error</h2>
        <p className="error__message">No se pudo cargar la información del personaje.</p>
        <Link to="/" className="button button--primary">Volver a la lista</Link>
      </div>
    );
  }

  return (
    <div className="character-detail">
      <div className="character-detail__container">
        <div className="character-detail__header">
          <div>
            <h1 className="character-detail__title">{character.name}</h1>
            <p className="character-detail__subtitle">{character.affiliation || character.role || 'Personaje'}</p>
          </div>
          <Link to="/" className="button button--text character-detail__back-button">
            ← Volver
          </Link>
        </div>

        <div className="character-detail__content">
          <div className="character-detail__image-container">
            <img 
              src={character.image} 
              alt={character.name} 
              className="character-detail__image"
            />
          </div>

          <div className="character-detail__info">
            <div className="character-detail__section">
              <h2 className="character-detail__section-title">Información básica</h2>
              <div className="character-detail__info-grid">
                <div className="character-detail__info-item character-detail__info-item--race">
                  <span className="character-detail__info-label">Raza</span>
                  <span className="character-detail__info-value">{character.race}</span>
                </div>
                <div className="character-detail__info-item character-detail__info-item--gender">
                  <span className="character-detail__info-label">Género</span>
                  <span className="character-detail__info-value">{character.gender}</span>
                </div>
                {character.ki && (
                  <div className="character-detail__info-item character-detail__info-item--ki">
                    <span className="character-detail__info-label">Ki</span>
                    <span className="character-detail__info-value">{character.ki.toLocaleString()}</span>
                  </div>
                )}
                {character.affiliation && (
                  <div className="character-detail__info-item character-detail__info-item--affiliation">
                    <span className="character-detail__info-label">Afiliación</span>
                    <span className="character-detail__info-value">{character.affiliation}</span>
                  </div>
                )}
                {character.planet && (
                  <div className="character-detail__info-item character-detail__info-item--planet">
                    <span className="character-detail__info-label">Planeta de origen</span>
                    <span className="character-detail__info-value">{character.planet}</span>
                  </div>
                )}
              </div>
            </div>

            {(character.height || character.weight || character.maxPower) && (
              <div className="character-detail__section">
                <h2 className="character-detail__section-title">Características</h2>
                <div className="character-detail__info-grid">
                  {character.height && (
                    <div className="character-detail__info-item character-detail__info-item--height">
                      <span className="character-detail__info-label">Altura</span>
                      <span className="character-detail__info-value">{character.height} cm</span>
                    </div>
                  )}
                  {character.weight && (
                    <div className="character-detail__info-item character-detail__info-item--weight">
                      <span className="character-detail__info-label">Peso</span>
                      <span className="character-detail__info-value">{character.weight} kg</span>
                    </div>
                  )}
                  {character.maxPower && (
                    <div className="character-detail__info-item character-detail__info-item--power">
                      <span className="character-detail__info-label">Máximo poder</span>
                      <span className="character-detail__info-value">{character.maxPower.toLocaleString()}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {character.description && (
              <div className="character-detail__section">
                <h2 className="character-detail__section-title">Descripción</h2>
                <p className="character-detail__description">{character.description}</p>
              </div>
            )}

            {character.transformations && character.transformations.length > 0 && (
              <div className="character-detail__section">
                <h2 className="character-detail__section-title">Transformaciones</h2>
                <div className="character-detail__transformations">
                  {character.transformations.map((transformation, index) => (
                    <div key={index} className="character-detail__transformation">
                      <h3 className="character-detail__transformation-name">{transformation.name}</h3>
                      {transformation.power && (
                        <p className="character-detail__transformation-power">
                          Poder: {transformation.power.toLocaleString()}
                        </p>
                      )}
                      {transformation.description && (
                        <p className="character-detail__transformation-description">
                          {transformation.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {character.abilities && character.abilities.length > 0 && (
              <div className="character-detail__section">
                <h2 className="character-detail__section-title">Habilidades</h2>
                <div className="character-detail__abilities">
                  {character.abilities.map((ability, index) => (
                    <span key={index} className="character-detail__ability">
                      {ability}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail; 