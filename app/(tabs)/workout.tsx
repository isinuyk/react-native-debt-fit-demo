import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { UserAvatar } from '@/components/UserAvatar';
import { useTheme } from '@/context/ThemeContext';
import { Settings, CalendarDays } from 'lucide-react-native';
import { WorkoutCard } from '@/components/WorkoutCard';
import { InfoCard } from '@/components/InfoCard';
import { useRouter } from 'expo-router';

// Sample workout data
const workouts = [
  {
    id: '1',
    title: 'Full Body Workout',
    duration: '45 min',
    calories: 320,
    imageUrl: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '2',
    title: 'Upper Body Focus',
    duration: '30 min',
    calories: 240,
    imageUrl: 'https://images.pexels.com/photos/4761779/pexels-photo-4761779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '3',
    title: 'Core Crusher',
    duration: '20 min',
    calories: 180,
    imageUrl: 'https://images.pexels.com/photos/6551133/pexels-photo-6551133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '4',
    title: 'Leg Day',
    duration: '40 min',
    calories: 300,
    imageUrl: 'https://images.pexels.com/photos/6550839/pexels-photo-6550839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export default function WorkoutScreen() {
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
          MY WORKOUT
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
          <View style={styles.summaryHeader}>
            <Text style={[styles.sectionTitle, { color: theme.text.primary }]}>
              Today's Plan
            </Text>
            
            <TouchableOpacity 
              style={[
                styles.calendarButton, 
                { 
                  backgroundColor: theme.card.background,
                  borderColor: theme.card.border, 
                }
              ]}
            >
              <CalendarDays size={18} color={theme.text.secondary} />
              <Text style={[styles.calendarText, { color: theme.text.secondary }]}>
                May 18
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.statsContainer}>
            <InfoCard
              title="Total Time"
              value="75"
              unit="min"
              info={false}
            />
            <InfoCard
              title="Calories"
              value="540"
              unit="kcal"
              info={false}
            />
          </View>
        </View>
        
        <View style={styles.workoutsContainer}>
          <Text style={[styles.sectionTitle, { color: theme.text.primary }]}>
            Workouts
          </Text>
          
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              title={workout.title}
              duration={workout.duration}
              calories={workout.calories}
              imageUrl={workout.imageUrl}
              onPress={() => {}}
            />
          ))}
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
    paddingHorizontal: 16,
  },
  summaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
  },
  calendarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    gap: 6,
  },
  calendarText: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  workoutsContainer: {
    marginTop: 32,
    paddingLeft: 16,
  },
  spacer: {
    height: 100,
  },
});