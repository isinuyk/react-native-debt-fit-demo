import { ThemeMode, ThemeScheme, Theme } from '@/types/theme';

// Theme schemes for light mode
const lightThemes: Record<ThemeScheme, Theme> = {
  default: {
    colors: {
      primary: '#4ECDC4',
      secondary: '#FF6B6B',
      background: '#F5F7FA',
      cardBackground: '#FFFFFF',
      cardBackgroundActive: 'rgba(78, 205, 196, 0.1)',
      tabBackgroundActive: 'rgba(78, 205, 196, 0.1)',
      textPrimary: '#2D3748',
      textSecondary: '#718096',
      border: '#E2E8F0',
    },
    gradients: {
      background: ['#F5F7FA', '#F0F4F8'],
    },
    shadows: {
      small: {
        shadowColor: '#718096',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      },
      medium: {
        shadowColor: '#4A5568',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
      },
    },
  },
  greeny: {
    colors: {
      primary: '#4ADE80',
      secondary: '#FB923C',
      background: '#F0FDF4',
      cardBackground: '#FFFFFF',
      cardBackgroundActive: 'rgba(74, 222, 128, 0.1)',
      tabBackgroundActive: 'rgba(74, 222, 128, 0.1)',
      textPrimary: '#14532D',
      textSecondary: '#4D7C0F',
      border: '#DCFCE7',
    },
    gradients: {
      background: ['#F0FDF4', '#ECFDF5'],
    },
    shadows: {
      small: {
        shadowColor: '#16A34A',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
      },
      medium: {
        shadowColor: '#16A34A',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
      },
    },
  },
  bluey: {
    colors: {
      primary: '#60A5FA',
      secondary: '#F472B6',
      background: '#EFF6FF',
      cardBackground: '#FFFFFF',
      cardBackgroundActive: 'rgba(96, 165, 250, 0.1)',
      tabBackgroundActive: 'rgba(96, 165, 250, 0.1)',
      textPrimary: '#1E3A8A',
      textSecondary: '#3B82F6',
      border: '#DBEAFE',
    },
    gradients: {
      background: ['#EFF6FF', '#E0F2FE'],
    },
    shadows: {
      small: {
        shadowColor: '#3B82F6',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
      },
      medium: {
        shadowColor: '#3B82F6',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
      },
    },
  },
};

// Theme schemes for dark mode
const darkThemes: Record<ThemeScheme, Theme> = {
  default: {
    colors: {
      primary: '#4ECDC4',
      secondary: '#FF6B6B',
      background: '#1A202C',
      cardBackground: '#2D3748',
      cardBackgroundActive: 'rgba(78, 205, 196, 0.2)',
      tabBackgroundActive: 'rgba(78, 205, 196, 0.2)',
      textPrimary: '#F7FAFC',
      textSecondary: '#A0AEC0',
      border: '#4A5568',
    },
    gradients: {
      background: ['#1A202C', '#171923'],
    },
    shadows: {
      small: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
      },
      medium: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 5,
      },
    },
  },
  greeny: {
    colors: {
      primary: '#4ADE80',
      secondary: '#FB923C',
      background: '#0F172A',
      cardBackground: '#1E293B',
      cardBackgroundActive: 'rgba(74, 222, 128, 0.2)',
      tabBackgroundActive: 'rgba(74, 222, 128, 0.2)',
      textPrimary: '#F7FAFC',
      textSecondary: '#94A3B8',
      border: '#334155',
    },
    gradients: {
      background: ['#0F172A', '#0B1120'],
    },
    shadows: {
      small: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
      },
      medium: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 5,
      },
    },
  },
  bluey: {
    colors: {
      primary: '#60A5FA',
      secondary: '#F472B6',
      background: '#0F172A',
      cardBackground: '#1E293B',
      cardBackgroundActive: 'rgba(96, 165, 250, 0.2)',
      tabBackgroundActive: 'rgba(96, 165, 250, 0.2)',
      textPrimary: '#F7FAFC',
      textSecondary: '#94A3B8',
      border: '#334155',
    },
    gradients: {
      background: ['#0F172A', '#0B1120'],
    },
    shadows: {
      small: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
      },
      medium: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 5,
      },
    },
  },
};

export const themes: Record<ThemeMode, Record<ThemeScheme, Theme>> = {
  light: lightThemes,
  dark: darkThemes,
};

export const availableThemeSchemes: ThemeScheme[] = ['default', 'greeny', 'bluey'];