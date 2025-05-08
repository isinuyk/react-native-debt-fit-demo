import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Info } from 'lucide-react-native'; 
import { useTheme } from '@/context/ThemeContext';

type InfoCardProps = {
  title: string;
  value: string;
  unit?: string;
  onPress?: () => void;
  info?: boolean;
};

export const InfoCard = ({ title, value, unit, onPress, info = true }: InfoCardProps) => {
  const { theme } = useTheme();
  
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: theme.card.background,
          borderColor: theme.card.border,
        },
      ]}
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={onPress ? 0.8 : 1}
    >
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: theme.text.secondary }]}>{title}</Text>
        {info && (
          <Info size={16} color={theme.text.secondary} />
        )}
      </View>
      <View style={styles.valueContainer}>
        <Text style={[styles.value, { color: theme.accent.primary }]}>
          {value}
        </Text>
        {unit && (
          <Text style={[styles.unit, { color: theme.text.secondary }]}>
            {unit}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    minWidth: 150,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 6,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  value: {
    fontSize: 24,
    fontWeight: '700',
  },
  unit: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 4,
    marginBottom: 3,
  },
});