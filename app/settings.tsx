import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/hooks/useTheme';
import { useRouter } from 'expo-router';
import { X } from 'lucide-react-native';
import ThemeSelector from '@/components/ThemeSelector';

export default function SettingsScreen() {
  const { theme, mode, setMode, themeScheme, setThemeScheme, availableThemes } = useTheme();
  const router = useRouter();

  return (
    <LinearGradient
      colors={theme.gradients.background}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: theme.colors.textPrimary }]}>
          Settings
        </Text>
        <TouchableOpacity 
          style={styles.closeButton} 
          onPress={() => router.back()}
        >
          <X size={24} color={theme.colors.textPrimary} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={[styles.section, { backgroundColor: theme.colors.cardBackground }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.textPrimary }]}>
            Appearance
          </Text>
          
          <View style={styles.themeSection}>
            <Text style={[styles.themeTitle, { color: theme.colors.textSecondary }]}>
              Mode
            </Text>
            <View style={styles.themeOptions}>
              {['light', 'dark'].map((themeMode) => (
                <TouchableOpacity
                  key={themeMode}
                  style={[
                    styles.themeOption,
                    mode === themeMode && { 
                      backgroundColor: theme.colors.cardBackgroundActive,
                      borderColor: theme.colors.primary,
                    },
                    { borderColor: theme.colors.border }
                  ]}
                  onPress={() => setMode(themeMode as 'light' | 'dark')}
                >
                  <Text 
                    style={[
                      styles.themeOptionText, 
                      { color: theme.colors.textPrimary },
                      mode === themeMode && { color: theme.colors.primary }
                    ]}
                  >
                    {themeMode.charAt(0).toUpperCase() + themeMode.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.themeSection}>
            <Text style={[styles.themeTitle, { color: theme.colors.textSecondary }]}>
              Theme
            </Text>
            <ThemeSelector 
              themes={availableThemes}
              currentTheme={themeScheme}
              onSelectTheme={setThemeScheme}
            />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 60,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  section: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    marginBottom: 16,
  },
  themeSection: {
    marginBottom: 24,
  },
  themeTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    marginBottom: 12,
  },
  themeOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  themeOption: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    minWidth: 100,
    alignItems: 'center',
  },
  themeOptionText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
  },
});