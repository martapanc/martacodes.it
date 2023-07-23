import { type SchemaTypeDefinition } from 'sanity';

import skillIcon from '@/schemas/skillIcon';

import job from '../src/schemas/job';
import language from '../src/schemas/language';
import publication from '../src/schemas/publication';
import school from '../src/schemas/school';
import shortText from '../src/schemas/shortText';
import skill from '../src/schemas/skill';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [job, language, publication, school, shortText, skill, skillIcon],
};
