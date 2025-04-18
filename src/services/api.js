const API_BASE_URL = 'https://dragonball-api.com/api';

export async function getCharacters(page = 1, limit = 12, name = '') {
  const params = new URLSearchParams({
    page,
    limit,
  });
  
  if (name) {
    params.append('name', name);
  }
  
  const response = await fetch(`${API_BASE_URL}/characters?${params}`);
  
  if (!response.ok) {
    throw new Error('Error al obtener los personajes');
  }
  
  return response.json();
}

export async function getCharacterById(id) {
  const response = await fetch(`${API_BASE_URL}/characters/${id}`);
  
  if (!response.ok) {
    throw new Error('Error al obtener el detalle del personaje');
  }
  
  return response.json();
} 