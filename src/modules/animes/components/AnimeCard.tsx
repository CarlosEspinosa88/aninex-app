import Button from '@/components/Button';
import Card from '@/components/Card';
import type { Anime } from '@/interfaces';
import { useGetFavorites } from '@/hooks/useGetFavorites';

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
  const { favoriteAnimes, handleToggleFavorite } = useGetFavorites()

  return (
    <>
      {animes.length > 0 ? (
        <>
          <div className="flex flex-row flex-wrap gap-[35px] pt-10 pb-10">
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
          <button onClick={handleSearch}>
            Search
          </button>

          {pageInfo?.hasNextPage && (
            <div className='mt-[1rem]'>
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
