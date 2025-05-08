import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@/context/ThemeContext';

type UserAvatarProps = {
  size?: number;
  imageUrl: string;
  onPress?: () => void;
};

export const UserAvatar = ({ size = 40, imageUrl, onPress }: UserAvatarProps) => {
  const { theme } = useTheme();
  
  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        { 
          width: size, 
          height: size, 
          borderColor: theme.accent.primary,
          shadowColor: theme.shadow.color,
          shadowOpacity: theme.shadow.opacity,
          shadowOffset: theme.shadow.offset,
          shadowRadius: theme.shadow.radius,
        }
      ]}
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={onPress ? 0.8 : 1}
    >
      <Image 
        source={{ uri: imageUrl }} 
        style={[styles.image, { width: size - 4, height: size - 4 }]} 
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  image: {
    borderRadius: 100,
  },
});