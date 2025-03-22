import { useState } from 'react'
import type { Anime } from '@/interfaces';

export const useModal = () => {
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);
  
  const handleCardClick = (anime: Anime ) => {
    setSelectedAnime(anime);
  };

  const handleCloseModal = () => {
    setSelectedAnime(null);
  };

  return {
    selectedAnime,
    handleCardClick,
    handleCloseModal
  }
}