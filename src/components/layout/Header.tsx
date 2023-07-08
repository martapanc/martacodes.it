'use client';

import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import * as React from 'react';
import { useEffect, useState } from 'react';
import Headroom from 'react-headroom';

import { useOnKeyDown } from '@/hooks/useOnKeyDown';

import { BurgerIcon } from '@/components/atoms/BurgerIcon';
import ModeToggleButton from '@/components/buttons/ModeToggleButton';
import UnstyledLink from '@/components/links/UnstyledLink';
import { MobileMenu } from '@/components/molecules/MobileMenu/MobileMenu';

export const links = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/cv', label: 'CV' },
  { href: '/uses', label: 'Uses' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useOnKeyDown('Escape', () => setIsOpen(false));

  return (
    <Headroom style={{ zIndex: 50 }}>
      <header
        className={`sticky top-0 z-50 py-6 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-sky-900 to-blue-950'
            : 'bg-gradient-to-r from-sky-300 to-blue-400'
        }`}
      >
        <div className='layout flex h-12 w-full items-center justify-between'>
          <nav className='m-4 flex w-full items-center justify-between'>
            <UnstyledLink
              href='/'
              className='font-bold text-slate-900 hover:text-slate-700 dark:text-blue-50 dark:hover:text-blue-200'
            >
              Home
            </UnstyledLink>

            <ul className='hidden items-center justify-between space-x-6 text-lg md:flex'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <UnstyledLink
                    href={href}
                    className='animated-underline-2 dark:animated-underline rounded-sm font-medium text-slate-950 dark:text-blue-50'
                  >
                    {label}
                  </UnstyledLink>
                </li>
              ))}
            </ul>

            <div className='hidden md:block'>
              <ModeToggleButton />
            </div>
          </nav>

          <button
            className='absolute right-4 top-8 z-50 md:hidden'
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label='Menu'
          >
            <BurgerIcon isOpen={isOpen} />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} />
    </Headroom>
  );
}
