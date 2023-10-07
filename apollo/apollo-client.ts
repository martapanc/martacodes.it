import { HttpLink } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from '@apollo/experimental-nextjs-app-support/ssr';

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: process.env.GRAPHQL_URL,
    }),
  });
});

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
