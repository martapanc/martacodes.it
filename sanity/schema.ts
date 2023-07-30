import { type SchemaTypeDefinition } from 'sanity';

import homeContent from '@/schemas/homeContent';
import randomFact from '@/schemas/randomFact';

import book from '../src/schemas/book';
import job from '../src/schemas/job';
import language from '../src/schemas/language';
import podcast from '../src/schemas/podcast';
import publication from '../src/schemas/publication';
import school from '../src/schemas/school';
import shortText from '../src/schemas/shortText';
import skill from '../src/schemas/skill';
import skillIcon from '../src/schemas/skillIcon';
import tvSeries from '../src/schemas/tvSeries';
import videoGame from '../src/schemas/videoGame';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    book,
    homeContent,
    job,
    language,
    podcast,
    publication,
    randomFact,
    school,
    shortText,
    skill,
    skillIcon,
    tvSeries,
    videoGame,
  ],
};
