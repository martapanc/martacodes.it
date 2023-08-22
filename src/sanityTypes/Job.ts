import { TypedObject } from '@portabletext/types';

export interface Job {
  _id: string;
  name: string;
  company: string;
  iconUrl: string;
  location: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  isCurrentJob: boolean;
  description: TypedObject;
  mainColor: string;
  darkColor: string;
  technologies: string[];
}
