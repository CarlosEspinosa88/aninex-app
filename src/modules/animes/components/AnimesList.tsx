import { Animes } from "@/interfaces";


type AnimesListProps = {
  animes: Animes[];
}

export default function AnimesList({ animes }: AnimesListProps) {
  console.log("ANIMES", animes);
  return (
    <div>{animes?.map((anime) => (
      <div key={anime.id}>
        {anime.title.english}
        </div>
    ))}</div>
  )
}
