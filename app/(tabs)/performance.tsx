import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { UserAvatar } from '@/components/UserAvatar';
import { useTheme } from '@/context/ThemeContext';
import { Settings } from 'lucide-react-native';
import { PerformanceChart } from '@/components/PerformanceChart';
import { InfoCard } from '@/components/InfoCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';

// Sample data for chart
const chartData = [
  { x: 'Mon', y: 30 },
  { x: 'Tue', y: 45 },
  { x: 'Wed', y: 28 },
  { x: 'Thu', y: 52 },
  { x: 'Fri', y: 32 },
  { x: 'Sat', y: 64 },
  { x: 'Sun', y: 40 },
];

const statsData = [
  { title: 'Total Workouts', value: '32', unit: 'sessions' },
  { title: 'Average Time', value: '48', unit: 'min' },
  { title: 'Total Time', value: '24', unit: 'hours' },
  { title: 'Calories Burnt', value: '18,940', unit: 'kcal' },
];

export default function PerformanceScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  
  return (
    <View style={[styles.container, { backgroundColor: theme.background.primary }]}>
      <View style={styles.header}>
        <UserAvatar 
          imageUrl="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" 
          size={40}
        />
        
        <Text style={[styles.headerTitle, { color: theme.text.primary }]}>
          MY PERFORMANCE
        </Text>
        
        <TouchableOpacity onPress={() => router.push('/settings')}>
          <Settings size={24} color={theme.text.primary} />
        </TouchableOpacity>
      </View>
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.summaryContainer}>
          <Text style={[styles.sectionTitle, { color: theme.text.primary }]}>
            This Week
          </Text>
          
          <PerformanceChart data={chartData} />
        </View>
        
        <View style={styles.statsContainer}>
          <Text style={[styles.sectionTitle, { color: theme.text.primary }]}>
            Monthly Stats
          </Text>
          
          <View style={styles.statsGrid}>
            {statsData.map((stat, index) => (
              <InfoCard
                key={index}
                title={stat.title}
                value={stat.value}
                unit={stat.unit}
              />
            ))}
          </View>
        </View>
        
        <View style={styles.achievementsContainer}>
          <Text style={[styles.sectionTitle, { color: theme.text.primary }]}>
            Recent Achievements
          </Text>
          
          <View 
            style={[
              styles.achievementCard,
              {
                backgroundColor: theme.card.background,
                borderColor: theme.card.border,
                shadowColor: theme.shadow.color,
                shadowOpacity: theme.shadow.opacity,
                shadowOffset: theme.shadow.offset,
                shadowRadius: theme.shadow.radius,
              }
            ]}
          >
            <Text style={[styles.achievementTitle, { color: theme.text.primary }]}>
              Consistency Master
            </Text>
            <Text style={[styles.achievementDesc, { color: theme.text.secondary }]}>
              You've completed workouts for 5 consecutive days! Keep up the great work.
            </Text>
          </View>
        </View>
        
        <View style={styles.spacer} />
      </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  summaryContainer: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 16,
    marginBottom: 12,
    fontFamily: 'Inter-SemiBold',
  },
  statsContainer: {
    marginTop: 24,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    paddingHorizontal: 16,
  },
  achievementsContainer: {
    marginTop: 24,
  },
  achievementCard: {
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    elevation: 2,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    fontFamily: 'Inter-SemiBold',
  },
  achievementDesc: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Inter-Regular',
  },
  spacer: {
    height: 100,
  },
});