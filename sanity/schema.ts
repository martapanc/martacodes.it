import { type SchemaTypeDefinition } from 'sanity';

import job from '../src/schemas/job';
import school from '../src/schemas/school';
import shortText from '../src/schemas/shortText';
import skill from '../src/schemas/skill';
import skillIcon from '../src/schemas/skillIcon';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [job, school, shortText, skill, skillIcon],
};
