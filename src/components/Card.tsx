import Image from "next/image";
import Heart from '@/svg/Heart';

type CardProps = {
  imageUrl: string;
  title: string;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  className?: string;
};

export default function Card({
  imageUrl,
  title,
  isFavorite = false,
  className = '',
  onToggleFavorite,
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
        className="w-full h-[286px] rounded-xl object-cover shadow-md hover:shadow-lg transition-shadow shadow-[#00DECC]/80"
      />
      <p className="mt-2 text-[#8F8F8F] text-base font-semibold">
        {title}
      </p>
      <button
        onClick={onToggleFavorite}
        className="absolute bottom-2 right-2"
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
