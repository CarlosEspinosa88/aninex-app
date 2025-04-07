import { GET_ANIMES } from "@/lib/queries";

export const getAnimesMock = [{
  request: {
    query: GET_ANIMES,
    variables: {
      page: 1,
      perPage: 10,
      isAdult: false,
      type: "ANIME",
      search: undefined,
      genre_in: undefined,
      seasonYear: undefined,
      status: undefined,
      season: undefined
    }
  },
  result: {
    data: {
      Page: {
        pageInfo: {
          total: 100,
          currentPage: 1,
          lastPage: 10,
          hasNextPage: true,
          perPage: 10,
        },
        media: [{
          id: 136381,
          type: "ANIME",
          isAdult: false,
          siteUrl: "https://anilist.co/anime/136381",
          format: "OVA",
          status: "FINISHED",
          genres: [
            "Action",
            "Comedy",
            "Drama",
            "Sports"
          ],
          episodes: 1,
          season: "WINTER",
          averageScore: 65,
          endDate: {
            day: 24,
            month: 1,
            year: 2025
          },
          startDate: {
            year: 2025,
            month: 1,
            day: 24
          },
          description: "Original video animation for SK∞ (Sk8 the Infinity). Four slice-of-life omnibus stories",
          title: {
            english: "SK8 the Infinity EXTRA PART",
            native: "SK∞ エスケーエイト EXTRA PART",
          },
          coverImage: {
            large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx136381-t6c5rfKjnqqd.jpg"
          },
          trailer: {
            id: "9SG3Q5BoQO8",
            site: "youtube",
            thumbnail: "https://i.ytimg.com/vi/9SG3Q5BoQO8/hqdefault.jpg",
          }
        }]
      },
      currentSeason: {
        pageInfo: {
          total: 50,
          currentPage: 1,
          lastPage: 10,
          hasNextPage: true,
          perPage: 5,
        },
        media: [{
          id: 154064,
          isAdult: false,
          type: "ANIME",
          siteUrl: "https://anilist.co/anime/154064",
          format: "MOVIE",
          status: "FINISHED",
          genres: [
            "Romance"
          ],
          episodes: 1,
          season: "WINTER",
          averageScore: 57,
          endDate: {
            day: 31,
            month: 1,
            year: 2025
          },
          startDate: {
            year: 2025,
            month: 1,
            day: 31
          },
          description: "The story is centered around the main character, Akira, and his scientifically created girlfriend, No. 0.<br>\n<br>\n(Source: Crunchyroll)",
          title: {
            english: null,
            native: "メイクアガール"
          },
          coverImage: {
            large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx154064-qYnRF4BQsuM6.png"
          },
          trailer: {
            id: "gcGz5Nhguyc",
            site: "youtube",
            thumbnail: "https://i.ytimg.com/vi/gcGz5Nhguyc/hqdefault.jpg"
          }
        }]
      },
      allTime: {
        pageInfo: {
          total: 200,
          currentPage: 1,
          lastPage: 40,
          hasNextPage: true,
          perPage: 5,
        },
        media: [{
          id: 162722,
          isAdult: false,
          type: "ANIME",
          siteUrl: "https://anilist.co/anime/162722",
          format: "TV",
          status: "FINISHED",
          genres: [
            "Action",
            "Fantasy",
            "Mahou Shoujo",
            "Slice of Life"
          ],
          episodes: 12,
          season: "WINTER",
          averageScore: 72,
          endDate: {
            day: 30,
            month: 3,
            year: 2025
          },
          startDate: {
            year: 2025,
            month: 1,
            day: 12
          },
          description: "One of the anime projects to commemorate the 20th anniversary of the Precure franchise, this will be a direct sequel of <i>Mahoutsukai Precure!</i> aimed at grown-up fans of the anime",
          title: {
            english: "Witchy Precure!! MIRAI DAYS",
            native: "魔法つかいプリキュア MIRAI DAYS",
          },
          coverImage: {
            large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx162722-w30E3QgBvG7H.jpg",
          },
          trailer: {
            id: "Mdr0WF5pPgI",
            site: "youtube",
            thumbnail: "https://i.ytimg.com/vi/Mdr0WF5pPgI/hqdefault.jpg",
          }
        }]
      },
    }
  }
}]
