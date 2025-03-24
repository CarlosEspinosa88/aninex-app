import Image from 'next/image';
import Modal from '@/components/Modal'
import type { Anime } from '@/interfaces';
import Heart from '@/svg/Heart';
import { useGetFavorites } from '@/hooks/useGetFavorites';

type AnimeModalProps = {
  selectedAnime: Anime | null;
  closeModal: () => void;
};

export default function AnimeModal({
  selectedAnime,
  closeModal,
}: AnimeModalProps) {
  const { favoriteAnimes, handleToggleFavorite } = useGetFavorites();
  const isFavorite = favoriteAnimes.some((someAnime) => someAnime.id === selectedAnime?.id);

  return (
    <>
      {selectedAnime && (
        <div>
          <Modal onClose={closeModal}>
            <div>
              <Image
                priority
                width={200}
                height={180}
                src={selectedAnime.coverImage.large}
                alt={`${selectedAnime.title.english || selectedAnime.title.native}-image`}
                className="w-full h-[180px] rounded-t-2xl object-cover"
              />
              <div className="p-5 ">
                {/* title */}
                <div className="mb-5">
                  <h1 className="text-2xl font-semibold font-(family-name:--font-montserrat) text-[#282828]">
                    {selectedAnime.title.english}
                  </h1>
                  <h1 className="text-2xl font-semibold font-(family-name:--font-montserrat) text-[#282828]">  
                    {selectedAnime.title.native}
                  </h1>
                </div>

                {/* favorite */}
                <div className="relative">
                  <button
                    onClick={() => handleToggleFavorite({anime: selectedAnime, isFavorite  })}
                    className="absolute bottom-[40px] right-2"
                    aria-label="toggle favorite"
                  >
                    {isFavorite ? (
                      <Heart width={30} height={30} stroke="red" fill="#FF4B77"  />
                    ) : (
                      <Heart width={30} height={30} stroke="#FF4B77"  />
                    )}
                  </button>
                </div>
                
                {/* info */}
                <div className="flex flex-row gap-10">
                  <div>
                    <h4 className="text-md font-bold font-(family-name:--font-montserrat) text-[#282828]">
                      Episodes
                    </h4>
                    <p className="text-sm font-medium font-(family-name:--font-montserrat) text-[#282828]">
                      {selectedAnime.episodes}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-md font-bold font-(family-name:--font-montserrat) text-[#282828]">
                      Status
                    </h4>
                    <p className="text-sm font-medium font-(family-name:--font-montserrat) text-[#282828]">
                      {selectedAnime.status}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-md font-bold font-(family-name:--font-montserrat) text-[#282828]">
                      Start Date
                    </h4>
                    <p className="text-sm font-semibold font-(family-name:--font-montserrat) text-[#282828]">
                      {selectedAnime.startDate.year} {  selectedAnime.startDate.month} {selectedAnime.startDate.day}
                    </p>
                      
                  </div>

                  <div>
                    <h4 className="text-md font-bold font-(family-name:--font-montserrat) text-[#282828]">
                      End Date
                    </h4>
                    <p className="text-sm font-semibold font-(family-name:--font-montserrat) text-[#282828]">
                      {selectedAnime.endDate.year} {  selectedAnime.endDate.month} {selectedAnime.endDate.day}
                    </p> 
                  </div>
                </div>

                {/* description */}
                <div className="overflow-y-scroll h-[100px] my-5">
                  <p className="text-sm font-(family-name:--font-montserrat) text-black">
                    {selectedAnime.description}
                  </p>
                </div>

                {/* video */}
                {selectedAnime?.trailer?.id ? ( 
                  <div>
                    <iframe
                      width="100%"
                      height="200"
                      src={`https://www.youtube.com/embed/${selectedAnime.trailer.id}` || `https://www.dailymotion.com/embed/video/${selectedAnime.trailer.id}`}
                      title={`${selectedAnime.title.english || selectedAnime.title.native}-video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ): (
                  <div className="w-full h-50 bg-[#f2f2f2] flex items-center justify-center rounded-b-2xl">
                    <p className="text-sm font-semibold text-[#282828] font-(family-name:--font-montserrat)">No video available</p>
                  </div>
                )}
              </div>
            </div>
          </Modal>
        </div>
      )}
    </>
  )
}
