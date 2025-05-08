import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Clock, Flame, ChevronRight } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';

type WorkoutCardProps = {
  title: string;
  duration: string;
  calories: number;
  imageUrl: string;
  onPress?: () => void;
};

export const WorkoutCard = ({ title, duration, calories, imageUrl, onPress }: WorkoutCardProps) => {
  const { theme } = useTheme();
  
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: theme.card.background,
          borderColor: theme.card.border,
          shadowColor: theme.shadow.color,
          shadowOpacity: theme.shadow.opacity,
          shadowOffset: theme.shadow.offset,
          shadowRadius: theme.shadow.radius,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image source={{ uri: imageUrl }} style={styles.image} />
      
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.text.primary }]}>
          {title}
        </Text>
        
        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Clock size={16} color={theme.text.secondary} />
            <Text style={[styles.detailText, { color: theme.text.secondary }]}>
              {duration}
            </Text>
          </View>
          
          <View style={styles.detailItem}>
            <Flame size={16} color={theme.text.secondary} />
            <Text style={[styles.detailText, { color: theme.text.secondary }]}>
              {calories} kcal
            </Text>
          </View>
        </View>
      </View>
      
      <ChevronRight size={20} color={theme.text.secondary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    alignItems: 'center',
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  details: {
    flexDirection: 'row',
    gap: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  detailText: {
    fontSize: 12,
  },
});