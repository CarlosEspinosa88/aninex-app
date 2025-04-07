import { 
  screen, 
  waitFor 
} from '@testing-library/react';
import { renderWithProviders } from '@/utils/test-utils';
import AnimesPage from '@/app/page';
import { getAnimesMock } from '@/mocks/dataMock';

describe('Animes list', () => {
  it('should render loading state', async () => {
    renderWithProviders(<AnimesPage />, {
      mocks: getAnimesMock,
    });

    expect(screen.getByText(/loading page/i)).toBeInTheDocument();
  });

  it('should render current season or popular animes', async () => {
    renderWithProviders(<AnimesPage />, {
      mocks: getAnimesMock
    });
    
    await waitFor(() => {
      const currentSeasonAnime = screen.getByText(/メイクアガール/i);
      const allTimeAnime = screen.getByText(/witchy/i);
      
      expect(currentSeasonAnime).toBeInTheDocument();
      expect(allTimeAnime).toBeInTheDocument();
    });
  });
});
