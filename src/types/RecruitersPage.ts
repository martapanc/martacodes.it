import { TitledParagraph } from '@/types/Shared';

export interface RecruitersPage {
  intro: string;
  salary: TitledParagraph;
  generalInfo: TitledParagraph;
  toolsTechs: TitledParagraph;
  jobPreferences: TitledParagraph;
  tldr: TitledParagraph;
  outro: string;
}
