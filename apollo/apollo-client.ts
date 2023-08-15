import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://martacodes-it-strapi.up.railway.app/graphql',
  cache: new InMemoryCache(),
});

export default apolloClient;
