'use client';

import { ReactNode, useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { store } from '@/store/store';
import client from '@/lib/apolloClient';

export default function Providers({ children }: { children: ReactNode }) {

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      const favoritesData = state.favorites.animes;
      
      localStorage.setItem('favoriteAnimes', JSON.stringify(favoritesData));
    });
    return () => unsubscribe();
  }, []);

  return (
    <ReduxProvider store={store}>
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </ReduxProvider>
  );
}
