import React from 'react';

import { useTheme } from '@/hooks/useTheme';

import * as styles from './styles.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.themeToggle} onClick={toggleTheme}>
      {theme === 'light' ? '🌚 Dark' : '🌞 Light'} mode
    </button>
  );
};

export default ThemeToggle;
