export type Anime = {
  id: string;
  siteUrl: string;
  format: string;
  status: string;
  genres: string[];
  episodes: number;
  season: number;
  averageScore: number;
  startDate: {
    year: number;
    month: number;
    day: number;
  }
  endDate: {
    year: number;
    month: number;
    day: number;
  }

  description: string;
  title: {
    english: string;
    native: string;
  }
  coverImage: {
    large: string;
  }
  trailer: {
    id: string;
    site: string;
    thumbnail: string;
  }
}