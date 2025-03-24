"use client";

import Filters from '@/modules/animes/components/Filters';
import AnimesList from '@/modules/animes/components/AnimesList';
import { useGetAnimes } from '@/hooks/useGetAnimes';

export default function Home() {
  const {
    data,
    hasFilters,
    loading,
    error,
    search,
    genre,
    year,
    status,
    season,
    setSearch,
    setGenre,
    setYear,
    setStatus,
    setSeason,
    handleLoadMore,
    handlePreviousPage,
    handleReset,
  } = useGetAnimes();

  const ANIMES_DATA = data?.Page?.media || [];
  const ANIMES_ALL_POPULAR = data?.allTime?.media || [];
  const ANIMES_THIS_SEASON_POPULAR = data?.currentSeason?.media || [];
  const PAGE_INFO = data?.Page?.pageInfo;
  
  return (
    <div className='max-w-[1238px] mx-auto h-[100vh]'>
      <main>
        <Filters 
          year={year}
          genre={genre}
          status={status}
          season={season}
          search={search}
          setYear={setYear}
          setGenre={setGenre}
          setSearch={setSearch}
          setStatus={setStatus}
          setSeason={setSeason}
        />
        <AnimesList
          hasFilters={hasFilters}
          search={search}
          year={year}
          genre={genre}
          status={status}
          season={season}
          error={error}
          loading={loading}
          animes={ANIMES_DATA}
          allPopular={ANIMES_ALL_POPULAR}
          thisSeason={ANIMES_THIS_SEASON_POPULAR}
          pageInfo={PAGE_INFO}
          handlePreviousPage={handlePreviousPage}
          handleReset={handleReset}
          handleLoadMore={handleLoadMore}
        />
      </main>
    </div>
  );
}
