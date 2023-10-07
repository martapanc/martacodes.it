'use server';

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

// export const { getClient } = registerApolloClient(() => {
//   return new NextSSRApolloClient({
//     cache: new NextSSRInMemoryCache(),
//     link: new HttpLink({
//       uri: process.env.GRAPHQL_URL,
//     }),
//   });
// });

export const context_short = {
  fetchOptions: {
    next: { revalidate: 3600 },
  },
};

export const context_long = {
  fetchOptions: {
    next: { revalidate: 86400 },
  },
};
