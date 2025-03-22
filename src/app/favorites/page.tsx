"use client";

import AnimeModal from '@/modules/animes/components/AnimeModal';
import FavoriteAnimeCard from '@/modules/favorites/FavoriteAnimeCard';
import { useModal } from '@/hooks/useModal';

export default function Favorites() {
  const { selectedAnime, handleCardClick, handleCloseModal } = useModal();

  return (
    <div className='max-w-[1238px] mx-auto h-[100vh]'>
      <main>
        <FavoriteAnimeCard handleCardClick={handleCardClick} />
        <AnimeModal
          selectedAnime={selectedAnime}
          closeModal={handleCloseModal}
        />
      </main>
    </div>
  )
}