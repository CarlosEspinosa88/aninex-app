import { 
  fireEvent,
  screen, 
  waitFor 
} from '@testing-library/react';
import { renderWithProviders } from '@/utils/test-utils';
import AnimesPage from '@/app/page';
import { getAnimesMock, getAnimesFilteredMock } from '@/mocks/dataMock';

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

  it('should render filtered anime', async () => {
    renderWithProviders(<AnimesPage />, {
      mocks: getAnimesFilteredMock
    });

    const searchInput = screen.getByPlaceholderText(/search/i);

    fireEvent.change(searchInput, {
      target: { value: 'sk8' }
    });

    const result = await screen.findAllByText(/result for/i);
    expect(result).toHaveLength(1);
    expect(result[0]).toBeInTheDocument();

    const animeResult = await screen.findAllByText(/sk8/i);
    expect(animeResult).toHaveLength(3);
    expect(animeResult[0]).toBeInTheDocument();
  })
});
