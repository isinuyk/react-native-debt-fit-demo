import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { lightThemes, darkThemes, ThemeScheme, ThemeVariant } from '@/constants/themes';

type ThemeContextType = {
  theme: ThemeScheme;
  isDark: boolean;
  themeVariant: ThemeVariant;
  setThemeVariant: (variant: ThemeVariant) => void;
  toggleDarkMode: () => void;
  forceDarkMode: (value: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: lightThemes.default,
  isDark: false,
  themeVariant: 'default',
  setThemeVariant: () => {},
  toggleDarkMode: () => {},
  forceDarkMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemColorScheme === 'dark');
  const [themeVariant, setThemeVariant] = useState<ThemeVariant>('default');

  useEffect(() => {
    setIsDark(systemColorScheme === 'dark');
  }, [systemColorScheme]);

  const theme = isDark 
    ? darkThemes[themeVariant] || darkThemes.default 
    : lightThemes[themeVariant] || lightThemes.default;
  
  const toggleDarkMode = () => {
    setIsDark(prev => !prev);
  };

  const forceDarkMode = (value: boolean) => {
    setIsDark(value);
  };

  return (
    <ThemeContext.Provider 
      value={{ 
        theme, 
        isDark, 
        themeVariant, 
        setThemeVariant, 
        toggleDarkMode,
        forceDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};