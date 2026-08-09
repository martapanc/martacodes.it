'use client';

import * as React from 'react';

/**
 * A hairline that fades out at both ends, so sections are separated without a
 * hard rule running edge to edge. Unlike the `hr` it replaces, it stays visible
 * in dark mode.
 *
 * Alternatives, if this still reads as too much: drop it entirely and let the
 * section headings carry the separation, or narrow it to an ornament with
 * `mx-auto w-16`.
 */
const SectionDivider = () => (
  <div
    role='separator'
    className='mx-auto my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent dark:via-slate-500'
  />
);

export default SectionDivider;
