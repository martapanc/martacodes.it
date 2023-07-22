import { TypedObject } from '@portabletext/types';

import { SkillIcon } from '@/types/SkillIcon';

export interface Skill {
  name: string;
  title: string;
  description: TypedObject;
  icons: SkillIcon[];
}
