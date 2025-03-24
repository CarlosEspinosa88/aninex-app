import Input from "@/components/Input";
import InputSelect from "@/components/InputSelect";
import type { FiltersProps } from "@/interfaces";
import {
  GENRES_CATEGORIES, 
  SEASON_CATEGORIES, 
  STATUS_CATEGORIES, 
  YEARS_CATEGORIES
} from "@/constants";

export default function Filters({
  search, 
  genre,
  year,
  status,
  season,
  setSearch,
  setGenre,
  setYear,
  setStatus,
  setSeason
}: FiltersProps) {

  return (
    <div className='flex flex-row gap-5 w-full mt-10'>
      <div className='w-1/4'>
        <Input
          label="Search"
          placeholder="Search for an anime"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onBlur={() => {}}
        />
      </div>
      <div className='w-1/4'>
        <InputSelect
          id="genres"
          name="genres"
          label="Genres"
          value={genre}
          options={GENRES_CATEGORIES}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div className='w-1/4'>
        <InputSelect
          id="year"
          name="year"
          label="Year"
          value={year}
          options={YEARS_CATEGORIES}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div className='w-1/4'>
        <InputSelect
          id="status"
          name="status"
          label="Airing Status"
          value={status}
          options={STATUS_CATEGORIES}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>
      <div className='w-1/4'>
        <InputSelect
          id="season"
          name="season"
          label="Season"
          value={season}
          options={SEASON_CATEGORIES}
          onChange={(e) => setSeason(e.target.value)}
        />
      </div>
    </div>
  );
}