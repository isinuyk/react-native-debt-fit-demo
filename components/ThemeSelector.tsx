import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun } from 'lucide-react-native';
import { ThemeVariant } from '@/constants/themes';

export const ThemeSelector = () => {
  const { theme, isDark, toggleDarkMode, themeVariant, setThemeVariant } = useTheme();
  
  const themeOptions: Array<{ value: ThemeVariant, label: string }> = [
    { value: 'default', label: 'Default' },
    { value: 'greeny', label: 'Green' },
    { value: 'purple', label: 'Purple' },
    { value: 'sunset', label: 'Sunset' },
  ];
  
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.text.primary }]}>
        Appearance
      </Text>
      
      <View style={styles.modeSelector}>
        <TouchableOpacity
          style={[
            styles.modeButton,
            {
              backgroundColor: !isDark ? theme.accent.primary : 'transparent',
              borderColor: theme.card.border,
            },
          ]}
          onPress={() => !isDark ? null : toggleDarkMode()}
        >
          <Sun
            size={20}
            color={!isDark ? theme.text.inverse : theme.text.secondary}
          />
          <Text
            style={[
              styles.modeText,
              {
                color: !isDark ? theme.text.inverse : theme.text.secondary,
              },
            ]}
          >
            Light
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.modeButton,
            {
              backgroundColor: isDark ? theme.accent.primary : 'transparent',
              borderColor: theme.card.border,
            },
          ]}
          onPress={() => isDark ? null : toggleDarkMode()}
        >
          <Moon
            size={20}
            color={isDark ? theme.text.inverse : theme.text.secondary}
          />
          <Text
            style={[
              styles.modeText,
              {
                color: isDark ? theme.text.inverse : theme.text.secondary,
              },
            ]}
          >
            Dark
          </Text>
        </TouchableOpacity>
      </View>
      
      <Text style={[styles.sectionTitle, { color: theme.text.primary }]}>
        Theme Colors
      </Text>
      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.themesContainer}
      >
        {themeOptions.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={[
              styles.themeOption,
              {
                borderColor: themeVariant === option.value ? theme.accent.primary : theme.card.border,
              },
            ]}
            onPress={() => setThemeVariant(option.value)}
          >
            <View
              style={[
                styles.themePreview,
                {
                  backgroundColor: isDark 
                    ? option.value === 'default' ? '#4A9DFF' 
                    : option.value === 'greeny' ? '#22C55E'
                    : option.value === 'purple' ? '#A78BFA'
                    : '#FB7185'
                    : option.value === 'default' ? '#3184FF'
                    : option.value === 'greeny' ? '#16A34A'
                    : option.value === 'purple' ? '#8B5CF6'
                    : '#F43F5E',
                },
              ]}
            />
            <Text style={[styles.themeLabel, { color: theme.text.primary }]}>
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  modeSelector: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  modeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    padding: 12,
    gap: 8,
  },
  modeText: {
    fontSize: 14,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  themesContainer: {
    paddingVertical: 8,
    gap: 12,
  },
  themeOption: {
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 12,
    padding: 8,
    width: 80,
  },
  themePreview: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 8,
  },
  themeLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
});