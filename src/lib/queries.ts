import { gql } from '@apollo/client';

export const GET_ANIMES = gql`
  query GetAnimesFiltered(
    $page: Int,
    $perPage: Int,
    $isAdult: Boolean,
    $type: MediaType,
    $search: String,
    $genre_in: [String],
    $seasonYear: Int,
    $status: MediaStatus,
    $season: MediaSeason
  ) {
    # 1) Animes Filtered
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(
        isAdult: $isAdult
        type: $type
        search: $search
        genre_in: $genre_in
        seasonYear: $seasonYear
        status: $status
        season: $season
      ) {
        id
        isAdult
        type
        siteUrl
        format
        status
        genres
        episodes
        description
        averageScore
        endDate {
          day
          month
          year
        }
        startDate {
          year
          month
          day
        }
        title {
          english
          native
        }
        coverImage {
          large
        }
        trailer {
          id
          site
          thumbnail
        }
      }
    }

    # 2) "Current Season"
    currentSeason: Page(page: $page, perPage: 5) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(
        isAdult: $isAdult
        type: $type
        season: WINTER
        seasonYear: 2025
        sort: [POPULARITY_DESC]
      ) {
        id
        isAdult
        type
        siteUrl
        format
        status
        genres
        episodes
        description
        averageScore
        endDate {
          day
          month
          year
        }
        startDate {
          year
          month
          day
        }
        title {
          english
          native
        }
        coverImage {
          large
        }
        trailer {
          id
          site
          thumbnail
        }
      }
    }

    # 3) "All Time"
    allTime: Page(page: $page, perPage: 5) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(
        isAdult: $isAdult
        type: $type
        sort: [POPULARITY_DESC]
      ) {
        id
        isAdult
        type
        siteUrl
        format
        status
        genres
        episodes
        description
        averageScore
        endDate {
          day
          month
          year
        }
        startDate {
          year
          month
          day
        }
        title {
          english
          native
        }
        coverImage {
          large
        }
        trailer {
          id
          site
          thumbnail
        }
      }
    }
  }
`;