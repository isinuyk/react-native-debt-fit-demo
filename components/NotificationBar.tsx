import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { Bell } from 'lucide-react-native';

interface NotificationBarProps {
  count: number;
}

const NotificationBar: React.FC<NotificationBarProps> = ({ count }) => {
  const { theme } = useTheme();

  return (
    <View 
      style={[
        styles.container, 
        { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
        theme.shadows.small
      ]}
    >
      <Bell size={16} color={theme.colors.textSecondary} />
      <Text style={[styles.text, { color: theme.colors.textSecondary }]}>
        {count} new notifications
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 90,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  text: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    marginLeft: 8,
  },
});

export default NotificationBar;