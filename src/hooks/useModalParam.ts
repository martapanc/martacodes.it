'use client';

import { useCallback, useEffect, useState } from 'react';

/**
 * Marks history entries this hook pushed, so closing can tell "the modal is
 * one step back" from "the page was opened on this URL directly".
 */
const PUSHED_BY_MODAL = 'modalParam';

/**
 * Keeps a modal's identity in the query string, so a modal is linkable,
 * survives a reload, and answers to the browser's back button.
 *
 * Opening pushes a history entry; closing goes back where we own that entry and
 * otherwise rewrites the URL in place - which is what stops Back from leaving
 * the site when someone arrives on a deep link.
 */
export const useModalParam = (param = 'id') => {
  const read = () =>
    typeof window === 'undefined'
      ? null
      : new URLSearchParams(window.location.search).get(param);

  // Initialised from the URL rather than in an effect, so a deep link renders
  // with the modal already open instead of flashing the bare page first.
  const [value, setValue] = useState<string | null>(read);

  useEffect(() => {
    const sync = () => setValue(read());
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);

  const open = useCallback(
    (next: string) => {
      const url = new URL(window.location.href);
      url.searchParams.set(param, next);
      window.history.pushState({ [PUSHED_BY_MODAL]: true }, '', url);
      setValue(next);
    },
    [param],
  );

  const close = useCallback(() => {
    if (window.history.state?.[PUSHED_BY_MODAL]) {
      // Unwinds our own entry, so Back doesn't reopen the modal we just closed.
      // `popstate` fires and syncs the value.
      window.history.back();
      return;
    }

    const url = new URL(window.location.href);
    url.searchParams.delete(param);
    window.history.replaceState(null, '', url);
    setValue(null);
  }, [param]);

  return { value, open, close };
};
