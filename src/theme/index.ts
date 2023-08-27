import { createTheme, css, PaletteOptions } from '@mui/material/styles';

export type AllowedTheme = NonNullable<PaletteOptions['mode']>;

export const DEFAULT_THEME: AllowedTheme = 'light';

export const lightTheme = createTheme({
  palette: {
    primary: { main: '#2152CE' },
    secondary: { main: '#2a48f3' },
    text: {
      primary: '#000',
    },
    mode: 'light',
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: { main: '#2152CE' },
    secondary: { main: '#2a48f3' },
    text: {
      primary: '#FFFFFF',
    },
    mode: 'dark',
  },
});

export const globalStyles = css``;
