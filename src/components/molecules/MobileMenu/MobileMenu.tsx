'use client';

import FocusTrap from 'focus-trap-react';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import languages from '@/data/languages.json';

import { NavigationItem } from '@/components/atoms/NavigationItem';
import { links } from '@/components/layout/Header';
import LanguageSwitcherMobile from '@/components/molecules/LanguageSwitcher/LanguageSwitcherMobile';
import ThemeToggle from '@/components/molecules/ThemeToggle/ThemeToggle';

export interface MobileMenuProps {
  isOpen: boolean;
}

export const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const { t } = useTranslation();

  const i18nEnabled = false;

  const navigationVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className='from-grey-200 dark:from-grey-900 fixed top-0 z-40 h-screen w-screen gap-12 bg-gradient-to-b to-transparent p-4 backdrop-blur-xl transition-all delay-100 duration-700 ease-in-out md:hidden'
          initial={{ opacity: 0, y: '-50%', x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: '-50%' }}
          transition={{ duration: 0, delay: 0 }}
        >
          <FocusTrap
            focusTrapOptions={{
              clickOutsideDeactivates: true,
            }}
          >
            <ul className='align-center flex h-full flex-col justify-center gap-4 text-center'>
              {links.map(({ href, label }, i) => (
                <NavigationItem
                  key={href}
                  href={href}
                  title={t(label)}
                  variants={navigationVariants}
                  initial='hidden'
                  animate='visible'
                  customDelay={0.5 + (i + 1) * 0.1}
                />
              ))}
              <motion.li
                className='mt-12 flex justify-center'
                variants={navigationVariants}
                initial='hidden'
                animate='visible'
                custom={0.5 + (links.length + 3) * 0.1}
              >
                <ThemeToggle includeLabels={false} />
              </motion.li>

              {i18nEnabled && (
                <motion.li
                  className='flex justify-center'
                  variants={navigationVariants}
                  initial='hidden'
                  animate='visible'
                  custom={0.5 + (links.length + 4) * 0.1}
                >
                  <LanguageSwitcherMobile languages={languages} />
                </motion.li>
              )}
            </ul>
          </FocusTrap>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
