import { useState, useEffect, useCallback, JSX } from "react";
import { useQuery } from "react-query";
import { getCharacters } from "../services/api";
import CharacterCard from "../components/CharacterCard";
import SearchBar from "../components/SearchBar";
import { Character, ApiResponse } from "../types";

function CharacterList(): JSX.Element {
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");

  // Implementamos una función de búsqueda local como respaldo
  const filterCharactersLocally = useCallback((characters: Character[], term: string): Character[] => {
    if (!term.trim()) return characters;

    const searchLower = term.toLowerCase();
    return characters.filter(
      (character) =>
        character.name.toLowerCase().includes(searchLower) ||
        character.race.toLowerCase().includes(searchLower) ||
        (character.affiliation && character.affiliation.toLowerCase().includes(searchLower))
    );
  }, []);

  const { data, isLoading, isError, error } = useQuery<ApiResponse<Character>, Error>(
    ["characters", page, debouncedSearchTerm],
    () => getCharacters(page, 50, debouncedSearchTerm), // Aumentamos el límite para tener más datos para filtrar localmente
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setPage(1); // Reset to first page on new search
    }, 300); // Reducimos el tiempo de debounce para una respuesta más rápida

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleSearch = (term: string): void => {
    setSearchTerm(term);
  };

  if (isLoading) {
    return (
      <div className="loading">
        <div className="loading__spinner"></div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="error">
        <p className="error__message">{error?.message || "Ha ocurrido un error"}</p>
      </div>
    );
  }

  // Obtenemos los personajes de la API
  const apiCharacters = data?.items || [];

  // Aplicamos filtrado local adicional para mejorar la búsqueda
  const characters = searchTerm ? filterCharactersLocally(apiCharacters, searchTerm) : apiCharacters;

  const totalPages = data?.meta?.totalPages || 1;

  return (
    <div className="character-list">
      <div className="character-list__header">
        <h1 className="character-list__title">Personajes de Dragon Ball Z</h1>
        <p className="character-list__subtitle">Explora todos los personajes del universo de Dragon Ball Z</p>
      </div>

      <div className="character-list__search-container">
        <SearchBar value={searchTerm} onChange={handleSearch} placeholder="Buscar personaje..." />
      </div>

      {characters.length === 0 ? (
        <div className="character-list__empty">
          <div className="character-list__empty-icon">🔍</div>
          <p className="character-list__empty-text">No se encontraron personajes con ese nombre</p>
          <p className="character-list__empty-suggestion">Intenta con otro término de búsqueda</p>
        </div>
      ) : (
        <>
          <div className="character-list__results">
            <p className="character-list__results-count">
              {searchTerm ? `${characters.length} resultados encontrados` : `Mostrando ${characters.length} personajes`}
            </p>
          </div>

          <div className="grid character-list__grid">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>

          {!searchTerm && (
            <div className="pagination">
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className={`pagination__button pagination__nav-button ${
                  page === 1 ? "pagination__button--disabled" : ""
                }`}
                aria-label="Página anterior"
              >
                &laquo; Anterior
              </button>

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNumber = i + 1;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    className={`pagination__button ${pageNumber === page ? "pagination__button--active" : ""}`}
                    aria-current={pageNumber === page ? "page" : undefined}
                    aria-label={`Página ${pageNumber}`}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
                className={`pagination__button pagination__nav-button ${
                  page === totalPages ? "pagination__button--disabled" : ""
                }`}
                aria-label="Página siguiente"
              >
                Siguiente &raquo;
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default CharacterList;
