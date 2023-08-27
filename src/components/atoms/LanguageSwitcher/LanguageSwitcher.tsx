import {InputLabel, MenuItem, SelectChangeEvent} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import {useState} from 'react';

import i18n from '@/app/(public)/i18n';
import clsx from "clsx";
import {commonStyles} from "@/components/buttons/ModeToggleButton";
import * as React from "react";
import {HiLanguage} from "react-icons/hi2";
import {useTheme} from "next-themes";

export interface LanguageSwitcherProps {
  languages: LanguageDef[];
}

export interface LanguageDef {
  label: string;
  value: string;
  disabled?: boolean;
}

const LanguageSwitcher = ({ languages } : LanguageSwitcherProps) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const [chosenLanguage, setChosenLanguage] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    console.log(i18n.language);
    const newLang = event.target.value;
    setChosenLanguage(newLang);

    i18n.changeLanguage(newLang);
    console.log(i18n.language);
  };

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(i18n.language);
    const newLang = event.target.value;
    setChosenLanguage(newLang);

    i18n.changeLanguage(newLang);
    console.log(i18n.language);
  };

  const label = <HiLanguage/>;

  return (
    <div className="p-2">
      <select onChange={changeLanguage}
        className="rounded-md border-2 dark:bg-transparent"
      >
        {languages.map(
          (lang: LanguageDef) =>
            !lang.disabled && (
              <option
                style={{fontSize: '14px', fontWeight: 300}}
                key={lang.value}
                value={lang.value}
              >
                {lang.label}
              </option>
            )
        )}
      </select>

      {/*<FormControl sx={{m: 1, minWidth: 80, border: '2px solid white', color: isDarkMode ? 'white' : 'black'}} size='small'>*/}
      {/*  <InputLabel id='demo-select-small-label'>{label}</InputLabel>*/}
      {/*  <Select*/}
      {/*    id='demo-select-small'*/}
      {/*    labelId='demo-select-small-label'*/}
      {/*    value={chosenLanguage}*/}
      {/*    label={label}*/}
      {/*    onChange={handleChange}*/}
      {/*    style={{ fontSize: '14px' }}*/}
      {/*  >*/}
      {/*    {languages.map(*/}
      {/*      (lang: LanguageDef) =>*/}
      {/*        !lang.disabled && (*/}
      {/*          <MenuItem*/}
      {/*            className='font-light'*/}
      {/*            style={{fontSize: '14px', fontWeight: 300}}*/}
      {/*            key={lang.value}*/}
      {/*            value={lang.value}*/}
      {/*          >*/}
      {/*            {lang.label}*/}
      {/*          </MenuItem>*/}
      {/*        )*/}
      {/*    )}*/}
      {/*  </Select>*/}
      {/*</FormControl>*/}
    </div>
  );
};

export default LanguageSwitcher;
