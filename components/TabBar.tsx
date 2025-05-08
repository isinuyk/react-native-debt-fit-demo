import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Flame, Home, Dumbbell, Settings } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useRouter, usePathname } from 'expo-router';

export const TabBar = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  
  const tabs = [
    {
      name: 'performance',
      icon: Flame,
      label: 'Performance',
      route: '/performance',
    },
    {
      name: 'activity',
      icon: Home,
      label: 'Activity',
      route: '/activity',
    },
    {
      name: 'workout',
      icon: Dumbbell,
      label: 'Workout',
      route: '/workout',
    },
  ];

  const isActive = (route: string) => pathname === route;

  return (
    <View style={[styles.container, { backgroundColor: theme.card.background }]}>
      {tabs.map((tab) => {
        const active = isActive(tab.route);
        
        return (
          <TabButton
            key={tab.name}
            Icon={tab.icon}
            label={tab.label}
            active={active}
            onPress={() => router.push(tab.route)}
          />
        );
      })}
    </View>
  );
};

type TabButtonProps = {
  Icon: React.ComponentType<{ size: number; color: string }>;
  label: string;
  active: boolean;
  onPress: () => void;
};

const TabButton = ({ Icon, label, active, onPress }: TabButtonProps) => {
  const { theme } = useTheme();
  
  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        active ? theme.accent.primary : 'transparent',
        { duration: 200 }
      ),
      transform: [
        { scale: withTiming(active ? 1 : 0.9, { duration: 200 }) },
      ],
    };
  }, [active, theme]);

  return (
    <TouchableOpacity
      style={styles.tabButton}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Animated.View 
        style={[
          styles.iconContainer,
          animatedStyles,
        ]}
      >
        <Icon 
          size={20} 
          color={active ? theme.text.inverse : theme.text.secondary}
        />
      </Animated.View>
      
      {active && (
        <Text style={[styles.label, { color: theme.text.primary }]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    paddingBottom: 10,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
  },
});