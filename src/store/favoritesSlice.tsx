import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '@/store/initialState';


export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<number>) {
      const animeId = action.payload;
      const isFav = state.animeIds.includes(animeId);

      if (isFav) {
        state.animeIds = state.animeIds.filter((id) => id !== animeId);
      } else {
        state.animeIds.push(animeId);
      }
    },
  },
});

export default favoritesSlice.reducer;