import Card from '@/components/Card';
import type { AnimeCardThisSeasonProps } from '@/interfaces';

export default function AnimeCardThisSeason({ 
  thisSeason, 
  favoriteAnimes,
  selectedAnime, 
  handleToggleFavorite, 
  handleCardClick 
}: AnimeCardThisSeasonProps) {
  const isFavorite = favoriteAnimes.some((someAnime) => someAnime.id === selectedAnime?.id);
  
  return (
    <div>
      <p className="block text-[#8F8F8F] text-[16px] font-bold font-(family-name:--font-montserrat) pt-15 pb-5">
        POPULAR THIS SEASON
      </p>
      <div className="flex flex-row flex-wrap gap-[35px]">
        {thisSeason?.map((anime) => {
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
    </div>
  )
}
