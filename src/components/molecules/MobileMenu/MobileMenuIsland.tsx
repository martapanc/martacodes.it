'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { useOnKeyDown } from '@/hooks/useOnKeyDown';
import { BurgerIcon } from '@/components/atoms/BurgerIcon';
import { MobileMenu } from './MobileMenu';

export default function MobileMenuIsland() {
  const [isOpen, setIsOpen] = useState(false);
  // MobileMenu is portaled to <body> so it's a sibling of <header>, not a
  // descendant: a positioned element's own background always paints behind
  // any positioned descendant regardless of z-index, so nesting the overlay
  // inside <header> silently defeated header's z-50 vs the overlay's z-40.
  // Deferred to an effect since this island uses client:media (unlike the
  // rest of the site's client:only pages), so it does run an SSR pass where
  // `document` doesn't exist.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useOnKeyDown('Escape', () => setIsOpen(false));

  return (
    <>
      <button
        className='absolute right-4 top-8 z-50 md:hidden'
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label='Menu'
      >
        <BurgerIcon isOpen={isOpen} />
      </button>
      {mounted && createPortal(<MobileMenu isOpen={isOpen} />, document.body)}
    </>
  );
}