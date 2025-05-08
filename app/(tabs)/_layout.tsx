import { Tabs } from 'expo-router';
import { ChartLine as Performance, Flame, Dumbbell } from 'lucide-react-native';
import { useTheme } from '@/hooks/useTheme';
import { View, StyleSheet } from 'react-native';

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.cardBackground,
          borderTopWidth: 0,
          height: 80,
          paddingBottom: 20,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="performance"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[
              styles.tabIconContainer,
              focused && { backgroundColor: theme.colors.tabBackgroundActive },
            ]}>
              <Performance size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[
              styles.tabIconContainer,
              focused && { backgroundColor: theme.colors.tabBackgroundActive },
            ]}>
              <Flame size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[
              styles.tabIconContainer,
              focused && { backgroundColor: theme.colors.tabBackgroundActive },
            ]}>
              <Dumbbell size={size} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});