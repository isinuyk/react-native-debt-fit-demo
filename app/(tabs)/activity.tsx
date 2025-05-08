import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header';
import InfoCard from '@/components/InfoCard';
import CircularProgress from '@/components/CircularProgress';
import PaginationDots from '@/components/PaginationDots';
import NotificationBar from '@/components/NotificationBar';

export default function ActivityScreen() {
  const { theme } = useTheme();
  
  return (
    <LinearGradient
      colors={theme.gradients.background}
      style={styles.container}
    >
      <Header title="MY ACTIVITY" />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.infoCardsContainer}>
          <InfoCard 
            title="Time Remaining" 
            value="1,096" 
            unit="days" 
            iconName="clock"
          />
          <View style={styles.divider} />
          <InfoCard 
            title="Workout Fuel" 
            value="$320" 
            unit="/month" 
            iconName="dollar-sign"
          />
        </View>
        
        <View style={styles.progressContainer}>
          <CircularProgress 
            title="INTEREST BURNT"
            value="$0"
            total="of $10,400"
            progress={0}
          />
        </View>
        
        <PaginationDots count={3} activeIndex={0} />
      </ScrollView>
      
      <NotificationBar count={2} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 90,
  },
  infoCardsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {
    width: 1,
    height: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  progressContainer: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});