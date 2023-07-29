import { TypedObject } from '@portabletext/types';

export interface RandomFact {
  _id: string;
  name: string;
  headline: string;
  description: TypedObject;
  trueFact: boolean;
  explanation: TypedObject;
}
