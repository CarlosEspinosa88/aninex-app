import Image from "next/image";
import Heart from '@/svg/Heart';
import { Anime } from "@/interfaces";


type CardProps = {
  anime: Anime;
  imageUrl: string;
  title: string;
  isFavorite?: boolean;
  className?: string;
  onToggleFavorite?: () => void;
  handleCardClick?: (anime: Anime) => void;
};

export default function Card({
  anime,
  imageUrl,
  title,
  isFavorite = false,
  className = '',
  onToggleFavorite,
  handleCardClick,
}: CardProps) {
  return (
    <div
      className={`
        relative w-[17.7%] bg-transparent 
        rounded-xl transition-transform hover:scale-105 
        ${className}
      `}
    >
      <Image
        priority
        src={imageUrl}
        alt={`${title}-image`}
        width={200}
        height={286}
        className="w-full h-[286px] rounded-xl object-cover shadow-md hover:shadow-lg transition-shadow shadow-[#00DECC]/80 cursor-pointer"
        onClick={() => handleCardClick?.(anime)}
      />
      <p className="mt-2 text-[#8F8F8F] text-base font-semibold w-[200px] mb-3 leading-[1.2] overflow-hidden line-clamp-2">
        {title}
      </p>
      <button
        onClick={onToggleFavorite}
        className="absolute bottom-[30px] right-2"
        aria-label="toggle favorite"
      >
        {isFavorite ? (
          <Heart width={18} height={18} stroke="red" fill="red"  />
        ) : (
          <Heart width={18} height={18} stroke="gray"  />
        )}
      </button>
    </div>
  );
}