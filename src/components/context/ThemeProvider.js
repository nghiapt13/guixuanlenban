import { createContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  function toggleTheme(e) {
    e.persist();
    e.stopPropagation();
    e.preventDefault();
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
