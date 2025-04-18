import { Character, ApiResponse } from '../types';

const API_URL = 'https://dragonball-api.com/api/characters';

export async function getCharacters(
  page: number = 1, 
  limit: number = 12, 
  search: string = ''
): Promise<ApiResponse<Character>> {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });
  
  if (search) {
    params.append('search', search);
  }
  
  const response = await fetch(`${API_URL}?${params}`);
  
  if (!response.ok) {
    throw new Error('Error al cargar los personajes');
  }
  
  return response.json();
}

export async function getCharacterById(id: string): Promise<Character> {
  const response = await fetch(`${API_URL}/${id}`);
  
  if (!response.ok) {
    throw new Error('Error al cargar el personaje');
  }
  
  return response.json();
} 