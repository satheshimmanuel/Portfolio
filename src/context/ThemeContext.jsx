import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (!saved || saved === 'dark') return 'light';
    return saved;
  });

  const [accent, setAccentState] = useState(() => {
    const saved = localStorage.getItem('portfolio-accent');
    if (!saved || saved === 'blue') return 'purple';
    return saved;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent);
    localStorage.setItem('portfolio-accent', accent);
  }, [accent]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeState, accent, setAccent: setAccentState }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
