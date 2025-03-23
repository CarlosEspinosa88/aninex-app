import Button from '@/components/Button';
import Card from '@/components/Card';
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { toggleFavorite } from "@/store/actions"
import type { Anime } from '@/interfaces';
import { selectFavorites } from "@/store/selectFavorites";

type AnimeCardProps = {
  animes: Anime[] | [];
  loading: boolean;
  pageInfo: {
    total:  number
    currentPage:  number
    lastPage:   number
    hasNextPage:  boolean
    perPage:  number
  };
  handleSearch: () => void;
  handleLoadMore: () => void;
  handleCardClick: (anime: Anime) => void;
}

export default function AnimeCard({
  animes,
  loading,
  pageInfo,
  handleSearch,
  handleLoadMore,
  handleCardClick
}: AnimeCardProps) {
  const favorites = useAppSelector(selectFavorites);
  const dispatch = useAppDispatch();
  
  const handleFavorite = (animeId: string) => {
    dispatch(toggleFavorite(animeId));
  }

  return (
    <>
      {animes.length > 0 ? (
        <>
          <div className="flex flex-row flex-wrap gap-[35px] pt-10 pb-10">
            {animes?.map((anime) => {
              const isFavorite = favorites.includes(anime.id);
              return (
                <Card
                  key={anime.id}
                  anime={anime}
                  isFavorite={isFavorite}
                  title={anime.title.english || anime.title.native}
                  imageUrl={anime.coverImage.large}
                  onToggleFavorite={() => handleFavorite(anime.id)}
                  handleCardClick={() => handleCardClick(anime)}
                />
              )
            }
            )}
          </div>
          <button onClick={handleSearch}>
            Search
          </button>

          {pageInfo?.hasNextPage && (
            <div style={{ marginTop: '1rem' }}>
              <Button 
                disabled={loading} 
                onClick={handleLoadMore} 
                label={loading ? 'Loading...' : 'Load more'} 
              />  
            </div>
          )}
        </>
      ) : (
        <div>No Results for your filters</div>
      )}
    </>
  )
}
