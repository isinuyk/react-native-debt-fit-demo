import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header';

export default function WorkoutScreen() {
  const { theme } = useTheme();

  return (
    <LinearGradient
      colors={theme.gradients.background}
      style={styles.container}
    >
      <Header title="WORKOUT" />
      <View style={styles.content}>
        <Text style={[styles.text, { color: theme.colors.textPrimary }]}>
          Workout Screen
        </Text>
        <Text style={[styles.subText, { color: theme.colors.textSecondary }]}>
          This is a placeholder for the Workout tab
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    marginBottom: 12,
  },
  subText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
});