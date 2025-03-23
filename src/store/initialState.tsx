import type { FavoriteState } from '@/interfaces';

const initialFavorites: string[] = (() => {
  if (typeof window !== 'undefined') {  
    const stored = localStorage.getItem('favorites');
    
    if (stored) return JSON.parse(stored);
  }
  return [];
})();

export const initialState: FavoriteState = {
  animeIds: initialFavorites,
};