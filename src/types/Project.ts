import type { Icon } from '@/types/Icon';

export interface Project {
  title: string;
  image: Icon;
  shortDescription: string;
  mediumDescription?: string;
  longDescription?: string;
  tools: string[];
  date: string;
  tags: string[];
  /** Promotes the project to the image-led block at the top of /projects. */
  featured?: boolean;
  /** Hidden from the site entirely; filtered out in projects.astro. */
  wip?: boolean;
  links: {
    github?: string;
    github2?: string;
    screenshots?: string;
    publicUrl?: string;
    article?: string;
    video?: string;
    video2?: string;
  };
}

export interface RawProject {
  id: string;
  title: string;
  image: Icon;
  shortDescription: string;
  mediumDescription?: string;
  longDescription?: string;
  tools: string;
  date: string;
  tags: string;
  links: object;
}
