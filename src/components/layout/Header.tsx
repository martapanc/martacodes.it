'use client';

import { MenuItem } from '@mui/material';
import { Menu } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { useEffect, useState } from 'react';
import Headroom from 'react-headroom';
import { useTranslation } from 'react-i18next';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

import { useOnKeyDown } from '@/hooks/useOnKeyDown';

import { BurgerIcon } from '@/components/atoms/BurgerIcon';
import LanguageSwitcher, {LanguageDef} from "@/components/atoms/LanguageSwitcher/LanguageSwitcher";
import ModeToggleButton from '@/components/buttons/ModeToggleButton';
import UnstyledLink from '@/components/links/UnstyledLink';
import { MobileMenu } from '@/components/molecules/MobileMenu/MobileMenu';

import languages from '@/locales/languages.json';

export const links = [
  { href: '/projects', label: 'headerMenu.projects' },
  { href: '/cv', label: 'headerMenu.cv' },
  { href: '/uses', label: 'headerMenu.uses' },
  { href: '/contact', label: 'headerMenu.contact' },
];

export default function Header() {
  const { t } = useTranslation();

  const languageDefs = languages as LanguageDef[];

  const [isOpen, setIsOpen] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
      <header className='sticky top-0 z-50 bg-gradient-to-r from-sky-300 to-blue-400 py-6 dark:from-sky-900 dark:to-blue-950'>
        <div className='layout flex h-12 w-full items-center justify-between'>
          <nav className='m-4 flex w-full items-center justify-between text-xl'>
            <UnstyledLink
              href='/'
              className='font-bold text-slate-900 hover:text-slate-700 dark:text-blue-50 dark:hover:text-blue-200'
            >
              Home
            </UnstyledLink>

            <ul className='hidden items-center justify-between space-x-6 text-lg md:flex'>
              <li>
                <span
                  className='animated-underline-2 dark:animated-underline flex items-center rounded-sm font-medium text-slate-950 dark:text-blue-50'
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  {t('headerMenu.about')}
                  {!open && <AiFillCaretDown className='ms-1.5' />}
                  {open && <AiFillCaretUp className='ms-1.5' />}
                </span>
                <Menu
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <Link href='/about/work'>
                      👔 {t('headerMenu.aboutWork')}
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link href='/about/free-time'>
                      🪁 {t('headerMenu.aboutFreeTime')}
                    </Link>
                  </MenuItem>
                </Menu>
              </li>

              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <UnstyledLink
                    href={href}
                    className='animated-underline-2 dark:animated-underline rounded-sm font-medium text-slate-950 dark:text-blue-50'
                  >
                    {t(label)}
                  </UnstyledLink>
                </li>
              ))}
            </ul>

            <div className='hidden md:flex md:flex-row'>
              <LanguageSwitcher languages={languageDefs}/>

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
