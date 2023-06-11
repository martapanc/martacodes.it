import * as React from 'react';

import ModeToggleButton from '@/components/buttons/ModeToggleButton';
import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/cv', label: 'CV' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50'>
      <div className='layout flex h-14 items-center justify-between'>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            <li>
              <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
                Home
              </UnstyledLink>
            </li>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>

        <ModeToggleButton />
      </div>
    </header>
  );
}
