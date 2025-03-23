import AnimeCard from "./AnimeCard";
import AnimeModal from "./AnimeModal";
import { useModal } from "@/hooks/useModal";
import type { AnimesListProps } from "@/interfaces";

export default function AnimesList({ 
  animes,
  loading,
  error,
  pageInfo,
  handleLoadMore,
  handlePreviousPage,
  handleReset,
}: AnimesListProps) {

  const {
    selectedAnime, 
    handleCardClick, 
    handleCloseModal 
  } = useModal();

  return (
    <div>
      {loading ? <div>Loading...</div> : (
        <>
          <AnimeCard 
            animes={animes}
            loading={loading}
            pageInfo={pageInfo}
            handleCardClick={handleCardClick}
            handleLoadMore={handleLoadMore}
            handlePreviousPage={handlePreviousPage}
            handleReset={handleReset}
          />
          <AnimeModal
            selectedAnime={selectedAnime}
            closeModal={handleCloseModal}
          />
        </>
        )}
      {error && <div>Error: {error.message}</div>}
    </div>
  )
}
