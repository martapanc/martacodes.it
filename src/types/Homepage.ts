export interface HomePage {
  greeting: string;
  introduction: Introduction;
  skills: Skills;
}

export interface Introduction {
  now: string;
  passion: string;
  education: string;
  work: string;
  cv: string;
  skills: string;
  fullStack: string;
  freeTime: string;
}

export interface Skills {
  fullStack: string;
  languages: string;
  latest: string;
}
