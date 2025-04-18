import { useState } from 'react';
import { useQuery } from 'react-query';
import { getCharacters } from '../services/api';
import CharacterCard from '../components/CharacterCard';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

function CharacterList() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  
  const { data, isLoading, isError, error } = useQuery(
    ['characters', page, debouncedSearchTerm],
    () => getCharacters(page, 12, debouncedSearchTerm),
    {
      keepPreviousData: true,
    }
  );
  
  const handleSearch = (term) => {
    setSearchTerm(term);
    // Debounce search to avoid too many requests
    const timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(term);
      setPage(1); // Reset to first page on new search
    }, 500);
    
    return () => clearTimeout(timeoutId);
  };
  
  if (isLoading) {
    return <div className="loading"><div className="loading__spinner"></div></div>;
  }
  
  if (isError) {
    return <div className="error"><p className="error__message">{error.message}</p></div>;
  }
  
  return (
    <div className="character-list">
      <div className="character-list__header">
        <h1 className="character-list__title">Personajes de Dragon Ball Z</h1>
        <p className="character-list__subtitle">
          Explora todos los personajes del universo de Dragon Ball Z
        </p>
      </div>
      
      <div className="character-list__search-container">
        <div className="search">
          <div className="search__icon">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
            </svg>
          </div>
          <input
            type="text"
            className="search__input"
            placeholder="Buscar personaje..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            aria-label="Buscar personaje"
          />
        </div>
      </div>
      
      {data.items.length === 0 ? (
        <div className="character-list__empty">
          <div className="character-list__empty-icon">🔍</div>
          <p className="character-list__empty-text">No se encontraron personajes con ese nombre</p>
          <p className="character-list__empty-suggestion">Intenta con otro término de búsqueda</p>
        </div>
      ) : (
        <>
          <div className="grid character-list__grid">
            {data.items.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
          
          <div className="pagination">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className={`pagination__button pagination__nav-button ${page === 1 ? 'pagination__button--disabled' : ''}`}
              aria-label="Página anterior"
            >
              &laquo; Anterior
            </button>
            
            {Array.from({ length: Math.min(5, data.meta.totalPages) }, (_, i) => {
              const pageNumber = i + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                  className={`pagination__button ${pageNumber === page ? 'pagination__button--active' : ''}`}
                  aria-current={pageNumber === page ? 'page' : undefined}
                  aria-label={`Página ${pageNumber}`}
                >
                  {pageNumber}
                </button>
              );
            })}
            
            <button
              onClick={() => setPage(page + 1)}
              disabled={page === data.meta.totalPages}
              className={`pagination__button pagination__nav-button ${page === data.meta.totalPages ? 'pagination__button--disabled' : ''}`}
              aria-label="Página siguiente"
            >
              Siguiente &raquo;
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CharacterList; 