import { useState } from "react";
import AnimeCard from "./AnimeCard";
import AnimeModal from "./AnimeModal";
import type { Anime, AnimesListProps } from "@/interfaces";

export default function AnimesList({ 
  animes,
  loading,
  error,
  pageInfo,
  handleSearch,
  handleLoadMore,
}: AnimesListProps) {
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);

  const handleCardClick = (anime: Anime ) => {
    setSelectedAnime(anime);
  };

  const closeModal = () => {
    setSelectedAnime(null);
  };

  return (
    <div>
      {loading ? <div>Loading...</div> : (
        <>
          <AnimeCard 
            animes={animes}
            loading={loading}
            pageInfo={pageInfo}
            handleSearch={handleSearch}
            handleLoadMore={handleLoadMore}
            handleCardClick={handleCardClick}
          />
          <AnimeModal
            selectedAnime={selectedAnime}
            closeModal={closeModal}
          />
        </>
        )}
      {error && <div>Error: {error.message}</div>}
    </div>
  )
}
