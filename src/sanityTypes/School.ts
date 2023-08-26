import { TypedObject } from '@portabletext/types';

export interface School {
  _id: string;
  name: string;
  schoolName: string;
  schoolIcon: string;
  flagUrl: string;
  degreeName: string;
  degreeUrl: string;
  grade: string;
  startYear: number;
  endYear: number;
  description: TypedObject;
}
