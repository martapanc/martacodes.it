import { flattenEntityResponseCollection } from 'strapi-flatten-graphql';

// type StrapiEntityResponseCollection<T> = {
//   data: T[];
// };

function _toCollection<T>(entityResponse: object): T[] {
  return flattenEntityResponseCollection(entityResponse);
}
