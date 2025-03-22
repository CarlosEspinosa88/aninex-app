"use client";

import Filters from '@/modules/animes/components/Filters';
import AnimesList from '@/modules/animes/components/AnimesList';
import { useGetAnimes } from '@/hooks/useGetAnimes';

export default function Home() {
  const {
    data,
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
    handleSearch,
    handleLoadMore,
  } = useGetAnimes();

  const ANIMES_DATA = data?.Page?.media || [];
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
          error={error}
          loading={loading}
          animes={ANIMES_DATA}
          pageInfo={PAGE_INFO}
          handleSearch={handleSearch}
          handleLoadMore={handleLoadMore}
        />
      </main>
    </div>
  );
}
