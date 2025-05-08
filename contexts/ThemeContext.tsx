import React, { createContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { themes, availableThemeSchemes } from '@/constants/themes';
import { ThemeContextType, ThemeMode, ThemeScheme } from '@/types/theme';

export const ThemeContext = createContext<ThemeContextType>({
  theme: themes.dark.default,
  mode: 'dark',
  themeScheme: 'default',
  setMode: () => {},
  setThemeScheme: () => {},
  availableThemes: availableThemeSchemes,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [mode, setMode] = useState<ThemeMode>(systemColorScheme === 'light' ? 'light' : 'dark');
  const [themeScheme, setThemeScheme] = useState<ThemeScheme>('default');

  // Update theme when system color scheme changes
  useEffect(() => {
    const newMode = systemColorScheme === 'light' ? 'light' : 'dark';
    setMode(newMode);
  }, [systemColorScheme]);

  const theme = themes[mode][themeScheme];

  const contextValue: ThemeContextType = {
    theme,
    mode,
    themeScheme,
    setMode,
    setThemeScheme,
    availableThemes: availableThemeSchemes,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};