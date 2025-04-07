import { ApolloError } from "@apollo/client";
import { store } from '@/store/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type Anime = {
  id: string;
  siteUrl: string;
  format: string;
  status: string;
  genres: string[];
  episodes: number;
  season: string;
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
  hasFilters: boolean;
  year: string;
  genre: string;
  status: string;
  season: string
  search: string;
  animes: Anime[] | [];
  allPopular: Anime[] | [];
  thisSeason: Anime[] | [];
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

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'warning';

export type ButtonProps = {
  label: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
};

export type LabelSearchProps = {
  search: string;
  year: string;
  genre: string;
  status: string;
  season: string;
  handleReset: () => void;
}

export type AnimeCardProps = {
  year: string;
  genre: string;
  status: string;
  season: string;
  search: string;
  animes: Anime[] | []
  allPopular: Anime[] | [];
  thisSeason: Anime[] | [];
  loading: boolean;
  pageInfo: {
    total:  number
    currentPage:  number
    lastPage:   number
    hasNextPage:  boolean
    perPage:  number
  };
  handleLoadMore: () => void;
  handlePreviousPage: () => void;
  handleReset: () => void;
  handleCardClick: (anime: Anime) => void;
}

export type CardProps = {
  anime: Anime;
  title: string;
  imageUrl: string;
  isFavorite?: boolean;
  className?: string;
  onToggleFavorite?: () => void;
  handleCardClick?: (anime: Anime) => void;
};

export type ErrorMessageProps = {
  error: ApolloError;
};

export type InputProps = {
  id?: string;
  value: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type InputSelectProps = {
  id: string;
  name?: string;
  label: string;
  value: string | number;
  options: Array<string | number>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export type useDebounceProps = {
  value: string;
  delay?: number;
}

export type handleToggleFavoriteProps = {
  anime: Anime;
  isFavorite: boolean;
}

export type AnimeModalProps = {
  selectedAnime: Anime | null;
  closeModal: () => void;
};

export type ButtonPaginationProps = {
  pageInfo: {
    hasNextPage: boolean;
    currentPage: number;
  },
  loading: boolean;
  handleLoadMore: () => void; 
  handlePreviousPage: () => void;
}

export type FiltersProps = {
  search: string;
  genre: string;
  year: string;
  status: string;
  season: string;
  setSearch: (e: string) => void;
  setGenre: (e: string) => void;
  setYear: (e: string) => void;
  setStatus: (e: string) => void;
  setSeason: (e: string) => void;
}

export type FavoriteAnimeCardProps = {
  handleCardClick: (anime: Anime) => void;
}

export type AnimeCardAllTimeProps = {
  allPopular: Anime[];
  favoriteAnimes: Anime[];
  handleToggleFavorite: ({ anime, isFavorite}: { anime: Anime; isFavorite: boolean }) => void;
  handleCardClick: (anime: Anime) => void;
}

export type AnimeCardThisSeasonProps = {
  thisSeason: Anime[];
  favoriteAnimes: Anime[];
  handleToggleFavorite: ({ anime, isFavorite}: { anime: Anime; isFavorite: boolean }) => void;
  handleCardClick: (anime: Anime) => void;
}