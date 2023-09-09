import { Icon } from '@/types/Icon';

export interface Project {
  id: string;
  title: string;
  image: Icon;
  shortDescription: string;
  longDescription?: string;
  tools: string[];
  date: string;
  tags: string[];
  links: object;
}

export interface RawProject {
  id: string;
  title: string;
  image: Icon;
  shortDescription: string;
  longDescription?: string;
  tools: string;
  date: string;
  tags: string;
  links: object;
}
