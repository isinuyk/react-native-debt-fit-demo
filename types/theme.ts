import { ViewStyle } from 'react-native';

export type ThemeMode = 'light' | 'dark';
export type ThemeScheme = 'default' | 'greeny' | 'bluey';

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    cardBackground: string;
    cardBackgroundActive: string;
    tabBackgroundActive: string;
    textPrimary: string;
    textSecondary: string;
    border: string;
  };
  gradients: {
    background: string[];
  };
  shadows: {
    small: ViewStyle;
    medium: ViewStyle;
  };
}

export interface ThemeContextType {
  theme: Theme;
  mode: ThemeMode;
  themeScheme: ThemeScheme;
  setMode: (mode: ThemeMode) => void;
  setThemeScheme: (scheme: ThemeScheme) => void;
  availableThemes: ThemeScheme[];
}