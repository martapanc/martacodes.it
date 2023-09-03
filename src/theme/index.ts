import { createTheme, css, PaletteOptions } from '@mui/material/styles';

export type AllowedTheme = NonNullable<PaletteOptions['mode']>;

export const DEFAULT_THEME: AllowedTheme = 'light';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#2152CE' },
    secondary: { main: '#2a48f3' },
    text: {
      primary: '#000',
    },
  },
  // components: {
  //   MuiMenu: {
  //     styleOverrides: {
  //       list: {
  //         '&[role="menu"], &[role="listbox"]': {
  //           backgroundColor: '#E2E8F0'
  //         },
  //       },
  //     },
  //   },
  // }
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#2152CE' },
    secondary: { main: '#2a48f3' },
    text: {
      primary: '#FFFFFF',
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          '&[role="menu"], &[role="listbox"]': {
            backgroundColor: '#1E293C',
          },
        },
      },
    },
  },
});

export const globalStyles = css``;
