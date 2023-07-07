import { type SchemaTypeDefinition } from 'sanity';

import job from '../src/schemas/job';
import skill from '../src/schemas/skill';
import skillIcon from '../src/schemas/skillIcon';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [job, skill, skillIcon],
};
