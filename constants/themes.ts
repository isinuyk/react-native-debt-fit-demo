// Define theme types
export type ThemeVariant = 'default' | 'greeny' | 'purple' | 'sunset';

export type ThemeScheme = {
  name: string;
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  text: {
    primary: string;
    secondary: string;
    accent: string;
    inverse: string;
  };
  card: {
    background: string;
    border: string;
  };
  button: {
    primary: string;
    secondary: string;
    accent: string;
    disabled: string;
  };
  accent: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  progress: {
    track: string;
    indicator: string;
    indicatorStart: string;
    indicatorEnd: string;
  };
  shadow: {
    color: string;
    offset: { width: number; height: number };
    opacity: number;
    radius: number;
  };
  border: {
    width: number;
    radius: number;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  statusBar: 'light' | 'dark';
};

// Light theme variants
export const lightThemes: Record<ThemeVariant, ThemeScheme> = {
  default: {
    name: 'Light Default',
    background: {
      primary: '#F4F4F8',
      secondary: '#FFFFFF',
      tertiary: '#EAEAEE',
    },
    text: {
      primary: '#202124',
      secondary: '#5F6368',
      accent: '#3184FF',
      inverse: '#FFFFFF',
    },
    card: {
      background: '#FFFFFF',
      border: '#E1E2E5',
    },
    button: {
      primary: '#3184FF',
      secondary: '#1F9984',
      accent: '#FE6A16',
      disabled: '#C1C1C1',
    },
    accent: {
      primary: '#3184FF', 
      secondary: '#1F9984',
      tertiary: '#FE6A16',
    },
    progress: {
      track: '#E1E2E5',
      indicator: '#3184FF',
      indicatorStart: '#3184FF',
      indicatorEnd: '#1F9984',
    },
    shadow: {
      color: '#000000',
      offset: { width: 0, height: 2 },
      opacity: 0.1,
      radius: 8,
    },
    border: {
      width: 1,
      radius: 12,
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
    statusBar: 'dark',
  },
  greeny: {
    name: 'Light Green',
    background: {
      primary: '#F4F8F6',
      secondary: '#FFFFFF',
      tertiary: '#E8F0EB',
    },
    text: {
      primary: '#202124',
      secondary: '#5F6368',
      accent: '#16A34A',
      inverse: '#FFFFFF',
    },
    card: {
      background: '#FFFFFF',
      border: '#D7E5DD',
    },
    button: {
      primary: '#16A34A',
      secondary: '#059669',
      accent: '#FE6A16',
      disabled: '#C1C1C1',
    },
    accent: {
      primary: '#16A34A',
      secondary: '#059669',
      tertiary: '#FE6A16',
    },
    progress: {
      track: '#E1E2E5',
      indicator: '#16A34A',
      indicatorStart: '#16A34A',
      indicatorEnd: '#059669',
    },
    shadow: {
      color: '#000000',
      offset: { width: 0, height: 2 },
      opacity: 0.1,
      radius: 8,
    },
    border: {
      width: 1,
      radius: 12,
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
    statusBar: 'dark',
  },
  purple: {
    name: 'Light Purple',
    background: {
      primary: '#F6F4FA',
      secondary: '#FFFFFF',
      tertiary: '#F0E8F5',
    },
    text: {
      primary: '#202124',
      secondary: '#5F6368',
      accent: '#8B5CF6',
      inverse: '#FFFFFF',
    },
    card: {
      background: '#FFFFFF',
      border: '#E5D7F0',
    },
    button: {
      primary: '#8B5CF6',
      secondary: '#6D28D9',
      accent: '#FE6A16',
      disabled: '#C1C1C1',
    },
    accent: {
      primary: '#8B5CF6',
      secondary: '#6D28D9',
      tertiary: '#FE6A16',
    },
    progress: {
      track: '#E1E2E5',
      indicator: '#8B5CF6',
      indicatorStart: '#8B5CF6',
      indicatorEnd: '#6D28D9',
    },
    shadow: {
      color: '#000000',
      offset: { width: 0, height: 2 },
      opacity: 0.1,
      radius: 8,
    },
    border: {
      width: 1,
      radius: 12,
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
    statusBar: 'dark',
  },
  sunset: {
    name: 'Light Sunset',
    background: {
      primary: '#FAF4F4',
      secondary: '#FFFFFF',
      tertiary: '#F5E8E8',
    },
    text: {
      primary: '#202124',
      secondary: '#5F6368',
      accent: '#F43F5E',
      inverse: '#FFFFFF',
    },
    card: {
      background: '#FFFFFF',
      border: '#F0D7D7',
    },
    button: {
      primary: '#F43F5E',
      secondary: '#E11D48',
      accent: '#FB923C',
      disabled: '#C1C1C1',
    },
    accent: {
      primary: '#F43F5E',
      secondary: '#E11D48',
      tertiary: '#FB923C',
    },
    progress: {
      track: '#E1E2E5',
      indicator: '#F43F5E',
      indicatorStart: '#F43F5E',
      indicatorEnd: '#FB923C',
    },
    shadow: {
      color: '#000000',
      offset: { width: 0, height: 2 },
      opacity: 0.1,
      radius: 8,
    },
    border: {
      width: 1,
      radius: 12,
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
    statusBar: 'dark',
  },
};

// Dark theme variants
export const darkThemes: Record<ThemeVariant, ThemeScheme> = {
  default: {
    name: 'Dark Default',
    background: {
      primary: '#121214',
      secondary: '#1D1D20',
      tertiary: '#2D2D32',
    },
    text: {
      primary: '#F0F0F4',
      secondary: '#ADADB8',
      accent: '#4A9DFF',
      inverse: '#202124',
    },
    card: {
      background: '#1D1D20',
      border: '#2D2D32',
    },
    button: {
      primary: '#4A9DFF',
      secondary: '#1F9984',
      accent: '#FE6A16',
      disabled: '#515151',
    },
    accent: {
      primary: '#4A9DFF',
      secondary: '#1F9984',
      tertiary: '#FE6A16',
    },
    progress: {
      track: '#2D2D32',
      indicator: '#4A9DFF',
      indicatorStart: '#4A9DFF',
      indicatorEnd: '#1F9984',
    },
    shadow: {
      color: '#000000',
      offset: { width: 0, height: 2 },
      opacity: 0.3,
      radius: 12,
    },
    border: {
      width: 1,
      radius: 12,
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
    statusBar: 'light',
  },
  greeny: {
    name: 'Dark Green',
    background: {
      primary: '#121412',
      secondary: '#1A1F1C',
      tertiary: '#283228',
    },
    text: {
      primary: '#F0F0F4',
      secondary: '#ADADB8',
      accent: '#22C55E',
      inverse: '#202124',
    },
    card: {
      background: '#1A1F1C',
      border: '#283228',
    },
    button: {
      primary: '#22C55E',
      secondary: '#059669',
      accent: '#FE6A16',
      disabled: '#515151',
    },
    accent: {
      primary: '#22C55E',
      secondary: '#059669',
      tertiary: '#FE6A16',
    },
    progress: {
      track: '#283228',
      indicator: '#22C55E',
      indicatorStart: '#22C55E',
      indicatorEnd: '#059669',
    },
    shadow: {
      color: '#000000',
      offset: { width: 0, height: 2 },
      opacity: 0.3,
      radius: 12,
    },
    border: {
      width: 1,
      radius: 12,
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
    statusBar: 'light',
  },
  purple: {
    name: 'Dark Purple',
    background: {
      primary: '#121214',
      secondary: '#1D1921',
      tertiary: '#2D2834',
    },
    text: {
      primary: '#F0F0F4',
      secondary: '#ADADB8',
      accent: '#A78BFA',
      inverse: '#202124',
    },
    card: {
      background: '#1D1921',
      border: '#2D2834',
    },
    button: {
      primary: '#A78BFA',
      secondary: '#8B5CF6',
      accent: '#FE6A16',
      disabled: '#515151',
    },
    accent: {
      primary: '#A78BFA',
      secondary: '#8B5CF6',
      tertiary: '#FE6A16',
    },
    progress: {
      track: '#2D2834',
      indicator: '#A78BFA',
      indicatorStart: '#A78BFA',
      indicatorEnd: '#8B5CF6',
    },
    shadow: {
      color: '#000000',
      offset: { width: 0, height: 2 },
      opacity: 0.3,
      radius: 12,
    },
    border: {
      width: 1,
      radius: 12,
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
    statusBar: 'light',
  },
  sunset: {
    name: 'Dark Sunset',
    background: {
      primary: '#141212',
      secondary: '#1F1A1A',
      tertiary: '#342828',
    },
    text: {
      primary: '#F0F0F4',
      secondary: '#ADADB8',
      accent: '#FB7185',
      inverse: '#202124',
    },
    card: {
      background: '#1F1A1A',
      border: '#342828',
    },
    button: {
      primary: '#FB7185',
      secondary: '#F43F5E',
      accent: '#FB923C',
      disabled: '#515151',
    },
    accent: {
      primary: '#FB7185',
      secondary: '#F43F5E',
      tertiary: '#FB923C',
    },
    progress: {
      track: '#342828',
      indicator: '#FB7185',
      indicatorStart: '#FB7185',
      indicatorEnd: '#FB923C',
    },
    shadow: {
      color: '#000000',
      offset: { width: 0, height: 2 },
      opacity: 0.3,
      radius: 12,
    },
    border: {
      width: 1,
      radius: 12,
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
    statusBar: 'light',
  },
};