import { gql } from '@apollo/client';

export const GET_ANIMES = gql`
  query Page (
    $page: Int, 
    $perPage: Int,
    $isAdult: Boolean,
    $type: MediaType,
    $search: String,
    $genre_in: [String],
    $seasonYear: Int,
    $status: MediaStatus
    $season: MediaSeason
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (
        isAdult: $isAdult,
        type: $type,
        search: $search,
        genre_in: $genre_in,
        seasonYear: $seasonYear,
        status: $status,
        season: $season,
      ){
        id
        isAdult
        type
        siteUrl
        format
        status
        genres
        episodes
        description
        title {          
          english
          native
        }
        coverImage {
          large
        }
      }
    }
  }
`;