import { type SchemaTypeDefinition } from 'sanity';

import book from '../src/schemas/book';
import job from '../src/schemas/job';
import language from '../src/schemas/language';
import podcast from '../src/schemas/podcast';
import publication from '../src/schemas/publication';
import school from '../src/schemas/school';
import shortText from '../src/schemas/shortText';
import skill from '../src/schemas/skill';
import skillIcon from '../src/schemas/skillIcon';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    book,
    job,
    language,
    podcast,
    publication,
    school,
    shortText,
    skill,
    skillIcon,
  ],
};
