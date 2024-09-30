import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return {
    theme,
    setTheme,
  };
}
