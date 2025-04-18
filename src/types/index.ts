export interface Character {
  id: string;
  name: string;
  image: string;
  race: string;
  gender: string;
  ki?: number;
  maxPower?: number;
  height?: string;
  weight?: string;
  description?: string;
  affiliation?: string;
  planet?: string;
  role?: string;
  transformations?: Transformation[];
  abilities?: string[];
}

export interface Transformation {
  name: string;
  power?: number;
  description?: string;
  image?: string;
}

export interface ApiResponse<T> {
  items: T[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
} 