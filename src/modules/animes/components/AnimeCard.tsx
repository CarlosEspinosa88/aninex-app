import Card from '@/components/Card';
import type { Anime } from '@/interfaces';
import { useGetFavorites } from '@/hooks/useGetFavorites';
import ButtonPagination from './ButtonPagination';
import NoResult from './NoResult';
import LabelSearch from './LabelSearch';

type AnimeCardProps = {
  year: string;
  genre: string;
  status: string;
  season: string;
  search: string;
  animes: Anime[] | [];
  loading: boolean;
  pageInfo: {
    total:  number
    currentPage:  number
    lastPage:   number
    hasNextPage:  boolean
    perPage:  number
  };
  handleLoadMore: () => void;
  handlePreviousPage: () => void;
  handleReset: () => void;
  handleCardClick: (anime: Anime) => void;
}

export default function AnimeCard({
  year,
  genre,
  status,
  season,
  search,
  animes,
  loading,
  pageInfo,
  handleLoadMore,
  handleCardClick,
  handlePreviousPage,
  handleReset,
}: AnimeCardProps) {
  const { favoriteAnimes, handleToggleFavorite } = useGetFavorites();

  console.log('animes', handleReset)

  return (
    <>
      <LabelSearch 
        search={search}
        season={season}
        year={year}
        genre={genre}
        status={status}
        handleReset={handleReset}
      />
      {animes.length > 0 ? (
        <>
          <div className="flex flex-row flex-wrap gap-[35px] pt-15 pb-10">
            {animes?.map((anime) => {
              const isFavorite = favoriteAnimes.some((someAnime) => someAnime.id === anime.id);
              
              return (
                <Card
                  key={anime.id}
                  anime={anime}
                  isFavorite={isFavorite}
                  title={anime.title.english || anime.title.native}
                  imageUrl={anime.coverImage.large}
                  onToggleFavorite={() => handleToggleFavorite({anime, isFavorite})}
                  handleCardClick={() => handleCardClick(anime)}
                />
              )
            })}
          </div>
          <ButtonPagination 
            pageInfo={pageInfo}
            loading={loading}
            handleLoadMore={handleLoadMore}
            handlePreviousPage={handlePreviousPage}
          />
        </>
      ) : <NoResult />}
    </>
  )
}
