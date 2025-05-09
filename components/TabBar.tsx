import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Flame, Home, Dumbbell } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { useRouter, usePathname } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      name: '/',
      icon: Home,
      label: 'Activity',
      route: '/',
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
    <SafeAreaView
      edges={['bottom']}
      style={[styles.container, { backgroundColor: theme.background.primary }]}
    >
      {tabs.map((tab) => {
        console.log('Tab:', tab, pathname);
        const active = isActive(tab.route);

        return (
          <TabButton
            key={tab.name}
            Icon={tab.icon}
            label={tab.label}
            active={active}
            onPress={() => router.push(tab.route as any)}
          />
        );
      })}
    </SafeAreaView>
  );
};

type TabButtonProps = {
  Icon: React.ComponentType<{ size: number; color: string }>;
  label: string;
  active: boolean;
  onPress: () => void;
};

const TabButton = ({ Icon, active, onPress }: TabButtonProps) => {
  const { theme } = useTheme();

  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        active ? theme.accent.primary : theme.background.secondary,
        { duration: 200 }
      ),
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
          { shadowColor: theme.background.secondary },
        ]}
      >
        <Icon
          size={30}
          color={active ? theme.text.inverse : theme.text.secondary}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 40,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
  },
});
