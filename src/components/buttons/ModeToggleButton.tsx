import clsx from 'clsx';
import { useTheme } from 'next-themes';
import * as React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

type ThemeButtonProps = React.ComponentPropsWithoutRef<'button'>;

export default function ModeToggleButton({
  className,
  ...rest
}: ThemeButtonProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  function toggleMode() {
    return theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <button
      className={clsx(
        'flex items-center justify-center rounded-md border-2 ' +
          'border-grey-300 ring-grey-300 bg-transparent p-2 transition-all hover:ring-2 hover:ring-offset-2 ' +
          'dark:border-grey-700 dark:ring-grey-200 dark:bg-transparent dark:hover:ring-2 dark:hover:ring-offset-2',
        className
      )}
      {...rest}
      onClick={toggleMode}
    >
      {mounted ? <>{theme === 'light' ? <FiMoon /> : <FiSun />}</> : <FiSun />}
    </button>
  );
}
