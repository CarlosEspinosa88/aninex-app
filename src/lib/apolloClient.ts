import { ApolloClient, InMemoryCache } from '@apollo/client';

const API_URL = 'https://graphql.anilist.co';

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export default client;