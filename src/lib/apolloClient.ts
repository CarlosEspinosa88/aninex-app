import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const API_URL = 'https://graphql.anilist.co';

const link = new HttpLink({
  uri: API_URL,
  fetchOptions: {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      }
  },
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;