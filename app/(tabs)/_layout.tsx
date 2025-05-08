import React from 'react';
import { Tabs } from 'expo-router';
import { TabBar } from '@/components/TabBar';
import { useTheme } from '@/context/ThemeContext';

export default function TabsLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      initialRouteName="performance"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="performance"
        options={{
          href: '/performance',
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          href: '/activity',
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          href: '/workout',
        }}
      />
    </Tabs>
  );
}
