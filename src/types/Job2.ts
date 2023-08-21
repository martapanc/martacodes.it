import { Icon2 } from '@/types/Icon2';

export interface Job2 {
  id: string;
  title: string;
  companyName: string;
  icon: Icon2;
  location: string;
  startDate: string;
  endDate: string;
  isCurrentJob: boolean;
  description: string;
  mainColor: string;
  darkColor: string;
  technologies: string[];
}
