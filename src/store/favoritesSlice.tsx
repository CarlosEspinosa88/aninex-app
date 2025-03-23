import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '@/store/initialState';
import { Anime } from '@/interfaces';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<string>) {
      const animeId = action.payload;
      const isFav = state.animeIds.includes(animeId);

      if (isFav) {
        state.animeIds = state.animeIds.filter((id) => id !== animeId);
      } else {
        state.animeIds.push(animeId);
      }
    },
    addFavoriteAnimes(state, action: PayloadAction<Anime>) {
      const newAnime = action.payload;
      const exists = state.animes.find((anime) => anime.id === newAnime.id);
      
      if (!exists) {
        state.animes.push(newAnime);
        
        if (!state.animeIds.includes(newAnime.id)) {
          state.animeIds.push(newAnime.id);
        }
      }
    },
    removeFavoriteAnime(state, action: PayloadAction<Anime>) {
      const animeId = action.payload.id;
      state.animes = state.animes.filter((anime) => anime.id !== animeId);
      state.animeIds = state.animeIds.filter((id) => id !== animeId);
    },
  },
});

export default favoritesSlice.reducer;