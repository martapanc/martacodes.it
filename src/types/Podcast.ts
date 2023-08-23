import { Icon } from '@/types/Icon';

export interface Podcast {
  id: string;
  name: string;
  author: string;
  language: string;
  cover: Icon;
  mediaLink: string;
}
