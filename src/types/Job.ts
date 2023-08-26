import { Icon } from '@/types/Icon';

export interface Job {
  id: string;
  title: string;
  companyName: string;
  icon: Icon;
  location: string;
  startDate: string;
  endDate: string;
  isCurrentJob: boolean;
  description: string;
  mainColor: string;
  darkColor: string;
  technologies: string[];
}
