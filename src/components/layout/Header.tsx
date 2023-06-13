import { useTheme } from 'next-themes';
import * as React from 'react';

import ModeToggleButton from '@/components/buttons/ModeToggleButton';
import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/cv', label: 'CV' },
  { href: '/uses', label: 'Uses' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const { theme } = useTheme();

  return (
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
            className={`font-bold 
            ${
              theme === 'dark'
                ? 'text-blue-50 hover:text-blue-200'
                : 'text-slate-900 hover:text-slate-700'
            } 
          `}
          >
            Home
          </UnstyledLink>

          <ul className='flex items-center justify-between space-x-6 text-lg'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className={`${
                    theme === 'dark'
                      ? 'text-blue-50 hover:text-blue-200'
                      : 'text-slate-900 hover:text-slate-700'
                  }`}
                >
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>

          <ModeToggleButton />
        </nav>
      </div>
    </header>
  );
}
