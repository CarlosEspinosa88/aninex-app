import AnimeCard from "./AnimeCard";
import AnimeModal from "./AnimeModal";
import ErrorMessage from "@/components/ErrorMessage";
import GenericLoading from "@/components/GenericLoading";
import AnimeCardAllTime from "./AnimeCardAllTime";
import AnimeCardThisSeason from "./AnimeCardThisSeason";
import { useModal } from "@/hooks/useModal";
import { useGetFavorites } from "@/hooks/useGetFavorites";
import type { AnimesListProps } from "@/interfaces";

export default function AnimesList({
  hasFilters,
  year,
  genre,
  status,
  season,
  search,
  animes,
  allPopular,
  thisSeason,
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

  const { favoriteAnimes, handleToggleFavorite } = useGetFavorites();

  return (
    <div>
      {loading ? <GenericLoading /> : (
        <>
          {!hasFilters ? (
            <>
              <AnimeCardThisSeason
                thisSeason={thisSeason}
                favoriteAnimes={favoriteAnimes}
                handleCardClick={handleCardClick} 
                handleToggleFavorite={handleToggleFavorite}
              />
              <AnimeCardAllTime
                allPopular={allPopular}
                favoriteAnimes={favoriteAnimes}
                handleCardClick={handleCardClick} 
                handleToggleFavorite={handleToggleFavorite}
              />
            </>
          ) :(
            <AnimeCard
              year={year}
              genre={genre} 
              status={status}
              season={season}
              search={search}
              animes={animes}
              allPopular={allPopular}
              thisSeason={thisSeason}
              loading={loading}
              pageInfo={pageInfo}
              handleCardClick={handleCardClick}
              handleLoadMore={handleLoadMore}
              handlePreviousPage={handlePreviousPage}
              handleReset={handleReset}
            />
          )}
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
