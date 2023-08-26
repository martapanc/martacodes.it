import {
  flattenEntityResponse,
  flattenEntityResponseCollection,
  StrapiEntityResponse,
  StrapiEntityResponseCollection,
} from 'strapi-flatten-graphql';

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
