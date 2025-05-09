import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { UserAvatar } from '@/components/UserAvatar';
import { useTheme } from '@/context/ThemeContext';
import { Settings } from 'lucide-react-native';
import { CircularProgress } from '@/components/CircularProgress';
import { InfoCard } from '@/components/InfoCard';
import { NotificationBar } from '@/components/NotificationBar';
import { useRouter } from 'expo-router';

export default function ActivityScreen() {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.background.primary }]}
    >
      <View style={styles.header}>
        <UserAvatar
          imageUrl="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
          size={40}
        />

        <Text style={[styles.headerTitle, { color: theme.text.primary }]}>
          MY ACTIVITY
        </Text>

        <TouchableOpacity onPress={() => router.push('/settings')}>
          <Settings size={24} color={theme.text.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.infoCardsContainer}>
          <InfoCard title="Time Remaining" value="1,096" unit="days" />
          <InfoCard title="Workout Fuel" value="$320" unit="/month" />
        </View>

        <View style={styles.progressContainer}>
          <CircularProgress
            progress={0.64}
            size={280}
            strokeWidth={20}
            value="$6,400"
            subtitle="of $10,400"
          />
        </View>

        <View style={styles.paginationContainer}>
          <View
            style={[
              styles.paginationDot,
              styles.paginationDotActive,
              { backgroundColor: theme.accent.primary },
            ]}
          />
          <View
            style={[
              styles.paginationDot,
              { backgroundColor: theme.text.secondary },
            ]}
          />
          <View
            style={[
              styles.paginationDot,
              { backgroundColor: theme.text.secondary },
            ]}
          />
        </View>

        <NotificationBar notificationCount={2} title="new notifications" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Inter-Bold',
  },
  content: {
    flex: 1,
    paddingTop: 16,
  },
  infoCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    gap: 16,
  },
  progressContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 100,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  paginationDotActive: {
    width: 24,
  },
});
