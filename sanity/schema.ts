import { type SchemaTypeDefinition } from 'sanity';

import skill from '../src/schemas/skill';
import skillIcon from '../src/schemas/skillIcon';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skill, skillIcon],
};
