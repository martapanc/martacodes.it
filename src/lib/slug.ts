/**
 * URL-safe identifier for a title, used to address modals from the query
 * string. Titles are the only stable identifier the project and skill data
 * carry - they are already what the lists key on - so the slug is derived
 * rather than stored.
 *
 * Verified collision-free across the current projects and skills; a new entry
 * that collides would make one of the two unreachable by URL.
 */
export const slugify = (value: string): string =>
  value
    .toLowerCase()
    // NFKD splits accented letters into base + combining mark, which the
    // alphanumeric filter below then drops - so "Ubersicht" and "Übersicht"
    // slug the same way instead of the latter losing its first letter.
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
