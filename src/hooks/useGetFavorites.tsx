import { useAppSelector } from "@/hooks/useAppDispatch";
import { selectFavoriteAnimes } from "@/store/selectFavorites";
import { addFavoriteAnimes, removeFavoriteAnime } from '@/store/actions';
import { useAppDispatch } from './useAppDispatch';
import { Anime, handleToggleFavoriteProps } from '@/interfaces';



export const useGetFavorites = () => {
  const dispatch = useAppDispatch();
  const favoriteAnimes = useAppSelector(selectFavoriteAnimes);

  function handleToggleFavorite ({anime, isFavorite}: handleToggleFavoriteProps) { 
    if (isFavorite) {
      dispatch(removeFavoriteAnime(anime));
    } else {
      dispatch(addFavoriteAnimes(anime));
    }
  }

  function handleRemoveFavorite(anime: Anime) {
    dispatch(removeFavoriteAnime(anime));
  }

  return {
    favoriteAnimes,
    handleToggleFavorite,
    handleRemoveFavorite
  }
}
