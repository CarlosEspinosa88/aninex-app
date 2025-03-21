"use client";

import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ANIMES } from '@/lib/queries';

import Filters from '@/modules/animes/components/Filters';
import AnimesList from '@/modules/animes/components/AnimesList';
import { ANIME_TYPE, IS_ADULT, PER_PAGE } from '@/constants';
import Button from '@/components/Button';

export default function Home() {
  const [search, setSearch] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [season, setSeason] = useState<string>('');
  
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data,
    loading,
    error,
    fetchMore,
    refetch
  } = useQuery(GET_ANIMES, {
    variables: {
      perPage: PER_PAGE,
      page: currentPage,
    }
  });
  
  const handleSearch = () => {
    setCurrentPage(1);
    refetch({
      page: 1,
      perPage: PER_PAGE,
      isAdult: IS_ADULT,
      type: ANIME_TYPE,
      search: search || undefined,
      genre_in: genre ? [genre] : undefined,
      seasonYear: year ? parseInt(year) : undefined,
      status: status || undefined,
      season: season || undefined,
    });
  };

  // Handler para “cargar más” (página siguiente)
  const handleLoadMore = async () => {
    if (data?.Page?.pageInfo?.hasNextPage) {
      const nextPage = data.Page.pageInfo.currentPage + 1;
      
      await fetchMore({
        variables: {
          page: nextPage,
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prevResult;
          
          return {
            Page: {
              __typename: 'Page',
              pageInfo: fetchMoreResult.Page.pageInfo,
              media: [
                ...prevResult.Page.media,
                ...fetchMoreResult.Page.media,
              ],
            },
          };
        },
      });

      setCurrentPage(nextPage);
    }
  };

  const ANIMES_DATA = data?.Page?.media || [];
  const PAGE_INFO = data?.Page?.pageInfo;
  
  return (
      <div className='max-w-[1238px] mx-auto h-[100vh]'>
        <main>
          <Filters 
            search={search}
            genre={genre}
            year={year}
            status={status}
            season={season}
            setSearch={setSearch}
            setGenre={setGenre}
            setYear={setYear}
            setStatus={setStatus}
            setSeason={setSeason}
            />
          <div>
            {loading ? <div>Loading...</div> : (
              <>
                <AnimesList animes={ANIMES_DATA} />
                <button onClick={handleSearch}>
                  Search
                </button>

                {PAGE_INFO?.hasNextPage && (
                  <div style={{ marginTop: '1rem' }}>
                    <Button 
                      onClick={handleLoadMore} 
                      disabled={loading} 
                      label={loading ? 'Cargando...' : 'Cargar más'} 
                    />  
                  </div>
                )}
              </>
            )}
            {error && <div>Error: {error.message}</div>}
          </div>
        </main>
      </div>
  );
}
