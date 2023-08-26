import { DocumentNode } from 'graphql/language';
import {
  flattenEntityResponse,
  flattenEntityResponseCollection,
  StrapiEntityResponse,
  StrapiEntityResponseCollection,
} from 'strapi-flatten-graphql';

import apolloClient from '../../apollo/apollo-client';

export function flattenToArray<T extends object>(
  entityResponseCollection: StrapiEntityResponseCollection<T>
): T[] {
  const flattenedData = flattenEntityResponseCollection(
    entityResponseCollection
  );
  return flattenedData as T[];
}

export function flattenToObject<T extends object>(
  entityResponse: StrapiEntityResponse<T>
): T {
  const flattenedData = flattenEntityResponse(entityResponse);
  return flattenedData as T;
}

export async function queryData<T>(
  query: DocumentNode,
  dataKey: string
): Promise<T[]> {
  const { data } = await apolloClient.query({ query });

  return flattenToArray<T>(data[dataKey]);
}
