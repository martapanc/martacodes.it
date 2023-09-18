export interface RecruitersPage {
  salary: TitledParagraph;
  toolsTechs: TitledParagraph;
  jobPreferences: TitledParagraph;
  tldr: TitledParagraph;
}

interface TitledParagraph {
  title: string;
  content: string;
}
