import { File } from '@/types/Icon';

export interface Publication {
  id: string;
  name: string;
  title: string;
  description: string;
  publisher: string;
  year: string;
  file: File;
}
