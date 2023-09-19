export interface RecruitersPage {
  intro: string;
  salary: TitledParagraph;
  generalInfo: TitledParagraph;
  toolsTechs: TitledParagraph;
  jobPreferences: TitledParagraph;
  tldr: TitledParagraph;
  outro: string;
}

interface TitledParagraph {
  title: string;
  content: string;
}
