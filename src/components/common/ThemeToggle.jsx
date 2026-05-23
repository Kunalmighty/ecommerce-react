import { BulbOutlined, BgColorsOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'salinaka-theme';

const getPreferredTheme = () => {
  if (typeof window === 'undefined') return 'light';

  const savedTheme = window.localStorage.getItem(STORAGE_KEY);

  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const applyTheme = (theme) => {
  document.documentElement.classList.toggle('theme-dark', theme === 'dark');
  document.documentElement.classList.toggle('theme-light', theme === 'light');
  document.documentElement.setAttribute('data-theme', theme);
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getPreferredTheme);
  const isDark = theme === 'dark';

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const onToggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="button-link theme-toggle"
      onClick={onToggleTheme}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      type="button"
    >
      {isDark ? <BulbOutlined /> : <BgColorsOutlined />}
    </button>
  );
};

export default ThemeToggle;
