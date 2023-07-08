import { TypedObject } from '@portabletext/types';

export interface ShortText {
  _id: string;
  name: string;
  title: string;
  content: TypedObject;
  iconUrl: string;
}
