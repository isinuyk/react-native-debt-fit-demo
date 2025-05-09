import React from 'react';
import { Tabs } from 'expo-router';
import { TabBar } from '@/components/TabBar';
import { useTheme } from '@/context/ThemeContext';

export default function TabsLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      initialRouteName="index"
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
        name="/"
        options={{
          href: '/index',
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
