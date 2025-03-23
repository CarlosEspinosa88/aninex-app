import type { Anime, FavoriteState } from '@/interfaces';

<<<<<<< HEAD
const initialFavorites: string[] = (() => {
=======
function loadFavoritesFromLocalStorage(): Anime[] {
>>>>>>> b3bf566 (Add favorites view)
  if (typeof window !== 'undefined') {  
    const stored = localStorage.getItem('favoriteAnimes');
    
    if (stored) return JSON.parse(stored);
  }
  return [];
};

const initialAnimes = loadFavoritesFromLocalStorage();

export const initialState: FavoriteState = {
  animeIds: initialAnimes.map((anime) => anime.id),
  animes: initialAnimes
};