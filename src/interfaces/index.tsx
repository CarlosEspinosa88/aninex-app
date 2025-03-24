import { ApolloError } from "@apollo/client";
import { store } from '@/store/store';

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

export interface FavoriteState {
  animeIds: string[];
  animes: Anime[];
}

export type AnimesListProps = {
  animes: Anime[] | [];
  loading: boolean;
  error: ApolloError | undefined;
  pageInfo: {
    total: number;
    currentPage: number;
    lastPage: number;
    hasNextPage: boolean;
    perPage: number;
  };
  handleLoadMore: () => void;
  handlePreviousPage: () => void;
  handleReset: () => void;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;