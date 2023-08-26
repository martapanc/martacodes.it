import { Icon } from '@/types/Icon';

export interface School {
  id: string;
  name: string;
  schoolName: string;
  icon: Icon;
  flag: Icon;
  degreeName: string;
  degreeUrl: string;
  grade: string;
  start: string;
  end: string;
  description: string;
}
