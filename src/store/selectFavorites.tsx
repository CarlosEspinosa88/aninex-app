import type { RootState } from './store';

export const selectFavorites = (state: RootState) => state.favorites.animeIds;
export const selectFavoriteAnimes = (state: RootState) => state.favorites.animes;