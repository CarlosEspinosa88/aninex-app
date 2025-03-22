import { useState } from "react";
import { ApolloError } from "@apollo/client";
import { Anime } from "@/interfaces";
import AnimeCard from "./AnimeCard";
import AnimeModal from "./AnimeModal";

type AnimesListProps = {
  animes: Anime[] | [];
  handleSearch: () => void;
  handleLoadMore: () => void;
  loading: boolean;
  error: ApolloError | undefined;
  pageInfo: {
  total:  number
  currentPage:  number
  lastPage:   number
  hasNextPage:  boolean
  perPage:  number
  };
}

export default function AnimesList({ 
  animes,
  handleSearch,
  handleLoadMore,
  loading,
  error,
  pageInfo,
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
