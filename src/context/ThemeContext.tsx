import React, { createContext, useContext, useEffect, useState } from 'react';
import { THEMES, Theme } from '@/styles/themes';

type ThemeContextType = {
  theme: Theme;
  setThemeId: (id: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeId, setThemeId] = useState<string>(() => {
    const saved = localStorage.getItem('quiz-helper-theme');
    if (saved && THEMES.some((t) => t.id === saved)) {
      return saved;
    }
    return 'default';
  });

  const theme = THEMES.find((t) => t.id === themeId) || THEMES[0];

  useEffect(() => {
    // Apply CSS variables to :root
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
    localStorage.setItem('quiz-helper-theme', themeId);
  }, [theme, themeId]);

  return <ThemeContext.Provider value={{ theme, setThemeId }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
