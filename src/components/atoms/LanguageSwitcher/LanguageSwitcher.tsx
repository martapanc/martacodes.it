import {InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import {useEffect, useState} from 'react';

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
  const { theme, resolvedTheme, setTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

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
      {/*<Select*/}
      {/*  labelId="demo-simple-select-helper-label"*/}
      {/*  id="demo-simple-select-helper"*/}
      {/*  value={theme}*/}
      {/*  onChange={handleChange}*/}
      {/*>*/}
      {/*  {languages.map(*/}
      {/*      (lang: LanguageDef) =>*/}
      {/*        !lang.disabled && (*/}
      {/*          <option*/}
      {/*            className="option"*/}
      {/*            style={{fontSize: '14px', fontWeight: 300}}*/}
      {/*            key={lang.value}*/}
      {/*            value={lang.value}*/}
      {/*          >*/}
      {/*            {lang.label}*/}
      {/*          </option>*/}
      {/*        )*/}
      {/*    )}*/}
      {/*</Select>*/}

      {/*<select onChange={changeLanguage}*/}
      {/*  className="select rounded-md border-2 dark:bg-transparent"*/}
      {/*>*/}
      {/*  {languages.map(*/}
      {/*    (lang: LanguageDef) =>*/}
      {/*      !lang.disabled && (*/}
      {/*        <option*/}
      {/*          className="option"*/}
      {/*          style={{fontSize: '14px', fontWeight: 300}}*/}
      {/*          key={lang.value}*/}
      {/*          value={lang.value}*/}
      {/*        >*/}
      {/*          {lang.label}*/}
      {/*        </option>*/}
      {/*      )*/}
      {/*  )}*/}
      {/*</select>*/}

      <FormControl sx={{m: 1, minWidth: 80, fontSize: '1.5rem' }} size='small'>
        <InputLabel id='demo-select-small-label'>{label}</InputLabel>
        <Select
          id='demo-select-small'
          labelId='demo-select-small-label'
          value={chosenLanguage}
          label={label}
          onChange={handleChange}
          // style={{ fontSize: '14px' }}
          // sx={{
          //   '& .MuiOutlinedInput-notchedOutline': {
          //     borderColor: isDarkMode ? 'white' : 'black'
          //   },
          //   '& .MuiSelect-iconOutlined': {
          //     color: isDarkMode ? 'white' : 'black'
          //   },
          //   '& .MuiOutlinedInput-input': {
          //     color: isDarkMode ? 'white' : 'black'
          //   },
          //   '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root': {
          //     color: isDarkMode ? 'white' : 'black'
          //   }
          // }}
        >
          {languages.map(
            (lang: LanguageDef) =>
              !lang.disabled && (
                <MenuItem
                  className='font-light'
                  style={{fontSize: '14px', fontWeight: 300}}
                  key={lang.value}
                  value={lang.value}
                >
                  {lang.label}
                </MenuItem>
              )
          )}
        </Select>
      </FormControl>
    </div>
  );
};

export default LanguageSwitcher;
