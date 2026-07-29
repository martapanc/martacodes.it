import type { Project } from '@/types/Project';

export const CATEGORIES = ['Work', 'Personal', 'University', 'Hackathon'] as const;

export type Category = (typeof CATEGORIES)[number];

/**
 * The `tags` field grew organically: it mixes context (`work`, `uni`) with
 * technology (`react`, `java`) and one-offs (`gdpr`, `startup`), and spells the
 * same category two ways – `uni` on six projects, `university` on one. Rather
 * than filter on it directly, map the handful of context tags onto a fixed set
 * and ignore everything else. Technology filtering reads `tools` instead, which
 * is consistently named and already has icons mapped in Icons.ts.
 *
 * A project may land in more than one category (the two hackathons were both
 * university events), so this returns a list rather than a single value.
 */
const TAG_TO_CATEGORY: Record<string, Category> = {
  work: 'Work',
  personal: 'Personal',
  uni: 'University',
  university: 'University',
  hackathon: 'Hackathon',
};

export const categoriesOf = (project: Project): Category[] => [
  ...new Set(
    project.tags
      .map((tag) => TAG_TO_CATEGORY[tag])
      .filter((category): category is Category => Boolean(category)),
  ),
];

export const projectYear = (date: string): string => date.slice(0, 4);

export interface ProjectFilterState {
  categories: Category[];
  tools: string[];
  years: string[];
  query: string;
}

export const NO_FILTERS: ProjectFilterState = {
  categories: [],
  tools: [],
  years: [],
  query: '',
};

export const isFiltering = (filters: ProjectFilterState): boolean =>
  filters.categories.length > 0 ||
  filters.tools.length > 0 ||
  filters.years.length > 0 ||
  filters.query.trim() !== '';

const matchesQuery = (project: Project, query: string): boolean => {
  const needle = query.trim().toLowerCase();
  if (!needle) return true;

  return [
    project.title,
    project.shortDescription,
    project.mediumDescription ?? '',
    ...project.tools,
    ...project.tags,
  ]
    .join(' ')
    .toLowerCase()
    .includes(needle);
};

/**
 * Axes are ANDed, values within an axis are ORed: picking React *and* Python
 * widens the results rather than demanding both. That suits browsing, which is
 * what this page is for – the AND reading would return nothing for most pairs.
 */
export const matchesFilters = (
  project: Project,
  filters: ProjectFilterState,
): boolean => {
  if (filters.categories.length) {
    const categories = categoriesOf(project);
    if (!filters.categories.some((category) => categories.includes(category))) {
      return false;
    }
  }

  if (filters.tools.length) {
    if (!filters.tools.some((tool) => project.tools.includes(tool))) {
      return false;
    }
  }

  if (filters.years.length && !filters.years.includes(projectYear(project.date))) {
    return false;
  }

  return matchesQuery(project, filters.query);
};

/** Tool keys are lowercase slugs; only the ones that don't title-case cleanly. */
const TOOL_LABELS: Record<string, string> = {
  agGrid: 'AG Grid',
  aws: 'AWS',
  css: 'CSS',
  dotnet: '.NET',
  graphql: 'GraphQL',
  html: 'HTML',
  ios: 'iOS',
  javascript: 'JavaScript',
  nextjs: 'Next.js',
  nodejs: 'Node.js',
  php: 'PHP',
  raspberrypi: 'Raspberry Pi',
  sql: 'SQL',
  typescript: 'TypeScript',
};

export const toolLabel = (tool: string): string =>
  TOOL_LABELS[tool] ?? tool.charAt(0).toUpperCase() + tool.slice(1);

const countBy = (projects: Project[], pick: (p: Project) => string[]) => {
  const counts = new Map<string, number>();
  projects.forEach((project) => {
    pick(project).forEach((key) => counts.set(key, (counts.get(key) ?? 0) + 1));
  });
  return counts;
};

export const categoryCounts = (projects: Project[]): Map<Category, number> =>
  countBy(projects, categoriesOf) as Map<Category, number>;

/**
 * Only years that actually have projects, newest first – 2015 and 2022 are
 * empty, and offering them as chips would just be dead options.
 */
export const yearsByRecency = (
  projects: Project[],
): { year: string; count: number }[] =>
  [...countBy(projects, (project) => [projectYear(project.date)]).entries()]
    .map(([year, count]) => ({ year, count }))
    .sort((a, b) => b.year.localeCompare(a.year));

/** Tools ordered by how many projects use them, ties broken alphabetically. */
export const toolsByFrequency = (
  projects: Project[],
): { tool: string; count: number }[] =>
  [...countBy(projects, (project) => project.tools).entries()]
    .map(([tool, count]) => ({ tool, count }))
    .sort((a, b) => b.count - a.count || a.tool.localeCompare(b.tool));
