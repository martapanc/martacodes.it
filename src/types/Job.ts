export interface Skill {
  id: string;
  company: string;
  icon: string;
  location: string;
  jobTitle: string;
  startYear: number;
  endYear: number;
  isCurrentJob: boolean;
  description: object;
  technologies: string[];
}
