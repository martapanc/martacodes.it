import fs from 'fs';

import projectsData from '@/data/projects/projects.json';
import { readMarkdown } from '@/lib/markdownUtils';
import type { Project } from '@/types/Project';

const DIRECTORY = 'src/data/projects';

/**
 * A project is a draft when its description file is underscore-prefixed, and a
 * draft renders nowhere. The prefix counts whether it's in projects.json
 * (`"longDescription": "_foo.md"`) or on disk alone – renaming `foo.md` to
 * `_foo.md` pulls the project from the site without touching the JSON, which is
 * the whole point of the convention. Complements `wip`, which hides a project
 * whose description is already finished.
 */
const isDraft = (project: Project): boolean => {
  const file = project.longDescription;
  if (!file?.endsWith('.md')) return false;
  return file.startsWith('_') || fs.existsSync(`${DIRECTORY}/_${file}`);
};

/**
 * The projects that should render, with each markdown description inlined.
 * Server-only: it touches the filesystem, so it can't be imported from a
 * component that ships to the browser.
 */
export const loadProjects = (): Project[] =>
  (projectsData as Project[])
    .filter((project) => !project.wip && !isDraft(project))
    .map((project) =>
      project.longDescription?.endsWith('.md')
        ? {
            ...project,
            longDescription: readMarkdown(`projects/${project.longDescription}`),
          }
        : project,
    );
