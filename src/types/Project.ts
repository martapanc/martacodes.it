import { IconType } from 'react-icons';

import { Icon } from '@/types/Icon';

export interface ToolIcon {
  icon: IconType;
  title: string;
}

export interface Project {
  id: string;
  title: string;
  image: Icon;
  shortDescription: string;
  longDescription?: string;
  tools: ToolIcon[];
  date: string;
  tags: string[];
  links: object;
}
