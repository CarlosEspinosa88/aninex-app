
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ANIMES } from '@/lib/queries';
import { ANIME_TYPE, IS_ADULT, PER_PAGE } from '@/constants';

export function useGetAnimes() {
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

  const handlePreviousPage = async () => {
    if (data?.Page?.pageInfo?.hasPreviousPage) {
      const previousPage = data.Page.pageInfo.currentPage - 1;
      
      await fetchMore({
        variables: {
          page: previousPage,
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

      setCurrentPage(previousPage);
    }
  }
    
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


  const handleReset = () => {
    setSearch('');
    setGenre('');
    setYear('');
    setStatus('');
    setSeason('');
    setCurrentPage(1);
    refetch({
      page: 1,
      perPage: PER_PAGE,
      isAdult: IS_ADULT,
      type: ANIME_TYPE,
    });
  }
    

  return {
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
    handlePreviousPage,
    handleReset,
  }
}