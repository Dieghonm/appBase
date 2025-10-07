import React, { createContext, useContext, useState, useEffect } from 'react';
import authService from '../services/authService';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('pink');

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await authService.obterTema();
      setTheme(savedTheme === 'pink' ? 'pink' : 'dark');
    };
    loadTheme();
  }, []);

  const changeTheme = async (mode) => {
    await authService.salvarTema(mode);
    setTheme(mode === 'pink' ? 'pink' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
