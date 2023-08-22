import { TypedObject } from '@portabletext/types';

import { Icon } from '@/sanityTypes/Icon';

export interface Skill {
  name: string;
  title: string;
  description: TypedObject;
  icons: Icon[];
}
