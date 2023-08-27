import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

// export interface LanguageSwitcherProps {
//   language: string;
// }

interface Language {
  label: string;
  value: string;
  enabled: boolean;
}

const languages: Language[] = [
  {
    label: '🇬🇧 EN',
    value: 'en',
    enabled: true,
  },
  {
    label: '🇮🇹 IT',
    value: 'it',
    enabled: true,
  },
  {
    label: '🇩🇪 DE',
    value: 'de',
    enabled: true,
  },
];

const LanguageSwitcher = () => {
  const [chosenLanguage, setChosenLanguage] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setChosenLanguage(event.target.value);
  };

  const label = <>🌐</>;

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }} size='small'>
        <InputLabel id='demo-select-small-label'>{label}</InputLabel>
        <Select
          id='demo-select-small'
          labelId='demo-select-small-label'
          value={chosenLanguage}
          label={label}
          onChange={handleChange}
          style={{ fontSize: '14px' }}
        >
          {languages.map(
            (lang: Language) =>
              lang.enabled && (
                <MenuItem
                  className='font-light'
                  style={{ fontSize: '14px', fontWeight: 300 }}
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
