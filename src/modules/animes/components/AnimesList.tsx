import { Animes } from "@/interfaces";
import Card from "@/components/Card";


type AnimesListProps = {
  animes: Animes[] | [];
}

export default function AnimesList({ animes }: AnimesListProps) {
  console.log("ANIMES", animes);
  return (
    <div className="flex flex-row flex-wrap gap-[35px] pt-10 pb-10">
      {animes?.map((anime) => (
        <Card 
          key={anime.id} 
          title={anime.title.english || anime.title.native} 
          imageUrl={anime.coverImage.large}
          onToggleFavorite={() => alert('Toggled favorite!')}
        />
      ))}
    </div>
  )
}
