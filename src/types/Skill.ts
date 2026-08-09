/**
 * Technology names, each a key into `skillIconMapping`, which holds both the
 * colour and monochrome artwork. Names with no entry there render nothing.
 */
export type SkillIconName = string;

export interface Skill {
  title: string;
  /** One-line gist, shown on the compact cards in place of the full prose */
  summary: string;
  description: string;
  icons: SkillIconName[];
  /** Promotes the skill to a full-size card above the compact grid */
  core?: boolean;
  rank?: number;
}
