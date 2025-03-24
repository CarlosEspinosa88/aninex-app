"use client";

import Card from '@/components/Card';
import NoResultFavorites from './NoResultFavorites';
import { useGetFavorites } from '@/hooks/useGetFavorites';
import { FavoriteAnimeCardProps } from '@/interfaces';


export default function FavoriteAnimeCard({ handleCardClick }: FavoriteAnimeCardProps) {
  const { favoriteAnimes, handleRemoveFavorite } = useGetFavorites();

  if (favoriteAnimes.length === 0) {
    return <NoResultFavorites />
  }

  return (
    <div className="flex flex-row flex-wrap gap-[35px] pt-10 pb-10">
      {favoriteAnimes?.map((anime) => {
        const isFavorite = favoriteAnimes.some((someAnime) => someAnime.id === anime.id);

        return (
          <Card
            key={anime.id}
            anime={anime}
            isFavorite={isFavorite}
            title={anime.title.english || anime.title.native}
            imageUrl={anime.coverImage.large}
            onToggleFavorite={() => handleRemoveFavorite(anime)}
            handleCardClick={() => handleCardClick(anime)}
          />
        )
      })}
    </div>
  )
}
