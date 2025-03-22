import { Anime } from '@/interfaces';
import { useAppDispatch } from './useAppDispatch';
import { addFavoriteAnimes, removeFavoriteAnime } from '@/store/actions';
import { selectFavoriteAnimes } from "@/store/selectFavorites";
import { useAppSelector } from "@/hooks/useAppDispatch";

type handleToggleFavoriteProps = {
  anime: Anime;
  isFavorite: boolean;
}

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
