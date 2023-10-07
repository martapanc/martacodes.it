import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { HiLanguage } from 'react-icons/hi2';

import { saveToCookie } from '@/lib/helper';

import i18n from '@/app/(public)/i18n';

export interface LanguageSwitcherProps {
  languages: LanguageDef[];
}

export interface LanguageDef {
  label: string;
  value: string;
  disabled?: boolean;
}

const LanguageSwitcher = ({ languages }: LanguageSwitcherProps) => {
  const [_, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  const [chosenLanguage, setChosenLanguage] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    const newLang = event.target.value;
    setChosenLanguage(newLang);

    saveToCookie('locale', newLang);

    i18n.changeLanguage(newLang);
  };

  const label = <HiLanguage />;

  return (
    <div>
      <FormControl
        size='small'
        className='ring-offset-2'
        sx={{
          m: 1,
          minWidth: 95,
          '& .MuiFormLabel-root': {
            fontSize: '1.5rem',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: '2px',
            borderColor: '#E5E7EB',
            borderRadius: '0.375rem',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#2562E8 !important',
          },
        }}
      >
        <InputLabel id='demo-select-small-label'>{label}</InputLabel>
        <Select
          id='demo-select-small'
          labelId='demo-select-small-label'
          value={chosenLanguage}
          label={label}
          onChange={handleChange}
          sx={{
            '& .MuiFormLabel-root': {
              fontSize: '1.5rem',
            },
          }}
        >
          {languages.map(
            (lang: LanguageDef) =>
              !lang.disabled && (
                <MenuItem
                  className='font-light'
                  style={{ fontSize: '14px', fontWeight: 300 }}
                  key={lang.value}
                  value={lang.value}
                >
                  {lang.label}
                </MenuItem>
              ),
          )}
        </Select>
      </FormControl>
    </div>
  );
};

export default LanguageSwitcher;
