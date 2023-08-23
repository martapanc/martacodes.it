import { Icon } from '@/types/Icon';

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  cover: Icon;
  goodreadsLink: string;
}
