import React, { useEffect, useState } from 'react';

import { useTheme } from '@/hooks/useTheme';

import * as styles from './styles.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  return (
    <button className={styles.themeToggle} onClick={toggleTheme}>
      {isClient ? (theme === 'light' ? '🌚 Dark mode' : '🌞 Light mode') : ''}
    </button>
  );
};

export default ThemeToggle;
