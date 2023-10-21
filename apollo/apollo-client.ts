import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: process.env.GRAPHQL_URL,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});

export default apolloClient;

export const context_short = {
  fetchOptions: {
    next: { revalidate: 86400 },
  },
};

export const context_long = {
  fetchOptions: {
    next: { revalidate: 604800 },
  },
};
