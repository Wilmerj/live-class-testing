import { Link } from "react-router-dom";
import { Character } from "../types";

interface CharacterCardProps {
  character: Character;
}

function CharacterCard({ character }: CharacterCardProps): JSX.Element {
  const getTagClass = (role?: string): string => {
    if (role === "Hero" || role === "Z Fighter") return "card__tag--hero";
    if (role === "Villain") return "card__tag--villain";
    return "card__tag--neutral";
  };

  return (
    <div className="card" data-testid="character-card">
      <div className="card__image-container">
        <img src={character.image} alt={character.name} className="card__image" />
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
          <span className={`card__tag ${getTagClass(character.role)}`}>{character.role || "Z Fighter"}</span>

          <Link to={`/character/${character.id}`} className="card__link">
            Ver detalles
            <span className="card__link-icon">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
