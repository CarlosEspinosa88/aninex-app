import Close from '@/svg/Close';
import { LabelSearchProps } from '@/interfaces';

export default function LabelSearch({ 
  search, 
  year, 
  genre, 
  status, 
  season,
  handleReset
}: LabelSearchProps) {
  return (
    <>
      {search || year || genre || status || season ? (
        <div className='flex flex-row items-center pt-5 gap-2'>
          <h3 className="text-[#8F8F8F] text-md font-semibold">
            Result For: 
          </h3>
          <p className="text-[#8F8F8F] text-md">
            {search && `Search: ${search} | `}
            {year && `Year: ${year} | `}
            {genre && `Genre: ${genre} | `}
            {status && `Status: ${status} |`}
            {season && `Season: ${season} | `}
          </p>
          <div className="relative">
            <button onClick={handleReset} className="text-white hover:text-gray-800  bg-[#0D7377]/80 p-2 rounded-full cursor-pointer">
              <Close width={24} height={24} stroke="white" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}
