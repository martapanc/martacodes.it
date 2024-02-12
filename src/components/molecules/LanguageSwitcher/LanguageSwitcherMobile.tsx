import Image from 'next/image';
import * as React from 'react';
import { useEffect, useState } from 'react';

import i18n from '@/lib/i18n';

export interface LanguageSwitcherProps {
  languages: LanguageDef[];
}

export interface LanguageDef {
  label: string;
  value: string;
  flag: string;
  disabled?: boolean;
}

const LanguageSwitcherMobile = ({ languages }: LanguageSwitcherProps) => {
  const [_, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  const [__, setChosenLanguage] = useState('');

  const handleChange = (newLang: string) => {
    setChosenLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  const flagSize = 20;

  return (
    <div className='flex flex-row'>
      {languages.map(
        (lang) =>
          !lang.disabled && (
            <Image
              key={lang.value}
              className='mx-2 hover:drop-shadow-md'
              src={lang.flag}
              alt={lang.value}
              height={flagSize}
              width={flagSize * 1.5}
              onClick={() => handleChange(lang.value)}
            />
          ),
      )}
    </div>
  );
};

export default LanguageSwitcherMobile;
