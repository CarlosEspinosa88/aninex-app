import { useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ANIMES } from '@/lib/queries';
import { ANIME_TYPE, IS_ADULT, PER_PAGE } from '@/constants';
import { useDebounce } from './useDebounce';

export const useGetAnimes = () => {
  const [search, setSearch] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [season, setSeason] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedSearch = useDebounce({ value: search, delay: 500 });
  
  const hasFilters = useMemo(() => {
    return (
      debouncedSearch !== '' ||
      genre !== '' ||
      year !== '' ||
      status !== '' ||
      season !== ''
    );
  }, [debouncedSearch, genre, year, status, season]);

  const {
    data,
    loading,
    error,
    refetch,
    fetchMore,
  } = useQuery(GET_ANIMES, {
    variables: {
      page: currentPage,
      perPage: PER_PAGE,
      isAdult: IS_ADULT,
      type: ANIME_TYPE,
      search: debouncedSearch || undefined,
      genre_in: genre ? [genre] : undefined,
      seasonYear: year ? parseInt(year) : undefined,
      status: status || undefined,
      season: season || undefined,
    },
    // skip: !hasFilters,
  });

  const handlePreviousPage = async () => {
    const previousPage = data.Page.pageInfo.currentPage - 1;
    if (previousPage < 1) return;
  
    setCurrentPage(previousPage);
    refetch({ 
      page: previousPage,
      perPage: PER_PAGE,
      isAdult: IS_ADULT,
      type: ANIME_TYPE,
      search: debouncedSearch || undefined,
      genre_in: genre ? [genre] : undefined,
      seasonYear: year ? parseInt(year) : undefined,
      status: status || undefined,
      season: season || undefined,
    });
  }
    
  const handleLoadMore = async () => {
    let pageInfo;

    if (hasFilters) {
      pageInfo = data?.Page?.pageInfo;
    } else {
      pageInfo = data?.allTime?.pageInfo;
    }
    
    if (!pageInfo?.hasNextPage) return;
    
    const nextPage = pageInfo.currentPage + 1;

    await fetchMore({
      variables: {
        page: nextPage,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult;

        if (hasFilters) {
          return {
            ...prevResult,
            Page: {
              __typename: 'Page',
              pageInfo: fetchMoreResult.Page.pageInfo,
              media: [
                ...prevResult.Page.media,
                ...fetchMoreResult.Page.media,
              ],
            },
            currentSeason: { ...prevResult.currentSeason },
            allTime: { ...prevResult.allTime },
          };
        } else {
          return {
            ...prevResult,
            allTime: {
              __typename: 'Page',
              pageInfo: fetchMoreResult.allTime.pageInfo,
              media: [
                ...prevResult.allTime.media,
                ...fetchMoreResult.allTime.media,
              ],
            },
            Page: { ...prevResult.Page },
            currentSeason: { ...prevResult.currentSeason },
          };
        }
      },
    });

    setCurrentPage(nextPage);
};


  const handleReset = async () => {
    setSearch('');
    setGenre('');
    setYear('');
    setStatus('');
    setSeason('');
    setCurrentPage(1);
    
    await refetch({
      page: 1,
      perPage: PER_PAGE,
      isAdult: IS_ADULT,
      type: ANIME_TYPE,
      search: undefined,
      genre_in: undefined,
      seasonYear: undefined,
      status: undefined,
      season: undefined,
    });
  }

  return {
    hasFilters,
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
    handleLoadMore,
    handlePreviousPage,
    handleReset,
  }
}