import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { ThemeScheme } from '@/types/theme';

interface ThemeSelectorProps {
  themes: ThemeScheme[];
  currentTheme: ThemeScheme;
  onSelectTheme: (theme: ThemeScheme) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  themes,
  currentTheme,
  onSelectTheme,
}) => {
  const { theme } = useTheme();

  const getThemeLabel = (themeScheme: ThemeScheme): string => {
    switch (themeScheme) {
      case 'default':
        return 'Teal';
      case 'greeny':
        return 'Green';
      case 'bluey':
        return 'Blue';
      default:
        return themeScheme.charAt(0).toUpperCase() + themeScheme.slice(1);
    }
  };

  const getThemeColor = (themeScheme: ThemeScheme): string => {
    switch (themeScheme) {
      case 'default':
        return '#4ECDC4';
      case 'greeny':
        return '#4ADE80';
      case 'bluey':
        return '#60A5FA';
      default:
        return '#4ECDC4';
    }
  };

  return (
    <View style={styles.container}>
      {themes.map((themeScheme) => (
        <TouchableOpacity
          key={themeScheme}
          style={[
            styles.themeOption,
            currentTheme === themeScheme && { 
              backgroundColor: theme.colors.cardBackgroundActive,
              borderColor: theme.colors.primary,
            },
            { borderColor: theme.colors.border }
          ]}
          onPress={() => onSelectTheme(themeScheme)}
        >
          <View 
            style={[
              styles.colorCircle, 
              { backgroundColor: getThemeColor(themeScheme) }
            ]} 
          />
          <Text 
            style={[
              styles.themeText, 
              { color: theme.colors.textPrimary },
              currentTheme === themeScheme && { color: theme.colors.primary }
            ]}
          >
            {getThemeLabel(themeScheme)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  themeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    minWidth: 100,
  },
  colorCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  themeText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
  },
});

export default ThemeSelector;