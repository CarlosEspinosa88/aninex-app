import AnimeCard from "./AnimeCard";
import AnimeModal from "./AnimeModal";
import ErrorMessage from "@/components/ErrorMessage";
import GenericLoading from "@/components/GenericLoading";
import { useModal } from "@/hooks/useModal";
import type { AnimesListProps } from "@/interfaces";

export default function AnimesList({
  year,
  genre,
  status,
  season,
  search,
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
      {loading ? <GenericLoading /> : (
        <>
          <AnimeCard
            year={year}
            genre={genre} 
            status={status}
            season={season}
            search={search}
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
      {error && <ErrorMessage error={error} />}
    </div>
  )
}
