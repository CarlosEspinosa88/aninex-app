import Card from '@/components/Card';
import type { AnimeCardAllTimeProps } from '@/interfaces';


export default function AnimeCardAllTime({ 
  allPopular, 
  favoriteAnimes,
  handleToggleFavorite, 
  handleCardClick 
}: AnimeCardAllTimeProps) {
  return (
    <div>
      <p className="block text-[#8F8F8F] text-[16px] font-bold font-(family-name:--font-montserrat) pt-15 pb-5">
        POPULAR ALL THE TIME
      </p>
      <div className="flex flex-row flex-wrap gap-[35px]">
        {allPopular?.map((anime) => {
          const isFavorite = favoriteAnimes.some((someAnime) => someAnime.id === anime?.id);
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
