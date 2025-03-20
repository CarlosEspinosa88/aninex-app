import { gql } from '@apollo/client';

export const GET_ANIMES = gql`
  query Page ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage ) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media{
        id
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