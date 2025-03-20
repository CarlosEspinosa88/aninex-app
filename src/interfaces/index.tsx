export type Animes = {
  id: string;
  siteUrl: string;
  format: string;
  status: string;
  genres: string[];
  episodes: number;
  description: string;
  title: {
    english: string;
    native: string;
  }
  coverImage: {
    large: string;
  }
}