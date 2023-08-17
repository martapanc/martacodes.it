import {
  flattenEntityResponseCollection,
  StrapiEntityResponseCollection,
} from 'strapi-flatten-graphql';

// export function toCollection<T extends object>(entityResponse: unknown): T[] {
//   // @ts-ignore
//   const collection: FlattenArray<StrapiEntityResponseCollection<T>> = flattenEntityResponseCollection(entityResponse);
//   return collection;
// }

export function flattenToArray<T extends object>(
  entityResponse: StrapiEntityResponseCollection<T>
): T[] {
  const flattenedData = flattenEntityResponseCollection(entityResponse);
  return flattenedData as T[];
}
