import { GlobalStyles } from '@mui/material';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useTheme } from 'next-themes';
import { FC, useEffect, useState } from 'react';

import { darkTheme, globalStyles, lightTheme } from '@/theme';

const MUIThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    resolvedTheme === 'light'
      ? setCurrentTheme(lightTheme)
      : setCurrentTheme(darkTheme);
  }, [resolvedTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
