import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/hooks/useTheme';
import { VictoryArea, VictoryChart, VictoryAxis } from 'victory-native';
import Header from '@/components/Header';
import InfoCard from '@/components/InfoCard';
import { Dumbbell, Clock } from 'lucide-react-native';

export default function PerformanceScreen() {
  const { theme } = useTheme();

  const data = [
    { x: 2023, y: 100 },
    { x: 2034, y: 80 },
    { x: 2040, y: 60 },
    { x: 2046, y: 40 },
    { x: 2052, y: 20 },
  ];

  return (
    <LinearGradient
      colors={theme.gradients.background}
      style={styles.container}
    >
      <Header title="PERFORMANCE" />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.chartContainer}>
          <View style={styles.dateRange}>
            <Text style={[styles.dateText, { color: theme.colors.textSecondary }]}>
              Feb 2025 - Feb 2050
            </Text>
            <View style={styles.legendContainer}>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: theme.colors.primary }]} />
                <Text style={[styles.legendText, { color: theme.colors.textSecondary }]}>Workout</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: theme.colors.textSecondary }]} />
                <Text style={[styles.legendText, { color: theme.colors.textSecondary }]}>Current</Text>
              </View>
            </View>
          </View>

          <VictoryChart
            padding={{ top: 20, bottom: 40, left: 40, right: 20 }}
            height={200}
          >
            <VictoryArea
              data={data}
              style={{
                data: {
                  fill: `${theme.colors.primary}20`,
                  stroke: theme.colors.primary,
                  strokeWidth: 2,
                },
              }}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
            />
            <VictoryAxis
              style={{
                axis: { stroke: theme.colors.textSecondary, strokeWidth: 0.5 },
                tickLabels: { fill: theme.colors.textSecondary, fontSize: 12 },
                grid: { stroke: 'transparent' },
              }}
            />
            <VictoryAxis
              dependentAxis
              style={{
                axis: { stroke: theme.colors.textSecondary, strokeWidth: 0.5 },
                tickLabels: { fill: theme.colors.textSecondary, fontSize: 12 },
                grid: { stroke: 'transparent' },
              }}
            />
          </VictoryChart>
        </View>

        <View style={styles.infoCardsContainer}>
          <InfoCard 
            title="Interest Burnt" 
            value="$8.6K" 
            unit="of $11.5K" 
            iconName="dollar-sign"
          />
          <View style={styles.divider} />
          <InfoCard 
            title="Workout Fuel" 
            value="$320" 
            unit="/month" 
            iconName="dollar-sign"
          />
        </View>

        <View style={[styles.highlightsSection, { backgroundColor: theme.colors.cardBackground }]}>
          <Text style={[styles.highlightsTitle, { color: theme.colors.textPrimary }]}>
            HIGHLIGHTS
          </Text>
          <Text style={[styles.highlightsText, { color: theme.colors.textSecondary }]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper rhoncus
          </Text>

          <View style={styles.statsContainer}>
            <View style={[styles.statItem, { backgroundColor: theme.colors.primary }]}>
              <Dumbbell size={24} color="white" />
              <Text style={styles.statLabel}>SESSIONS</Text>
              <Text style={styles.statValue}>16</Text>
            </View>
            <View style={[styles.statItem, { backgroundColor: theme.colors.cardBackgroundActive }]}>
              <Clock size={24} color={theme.colors.textPrimary} />
              <Text style={[styles.statLabel, { color: theme.colors.textPrimary }]}>TIME SPENT</Text>
              <Text style={[styles.statValue, { color: theme.colors.textPrimary }]}>13 mths</Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
    padding: 16,
  },
  chartContainer: {
    marginTop: 20,
    backgroundColor: 'transparent',
  },
  dateRange: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
  },
  legendContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
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
  highlightsSection: {
    marginTop: 24,
    padding: 16,
    borderRadius: 16,
  },
  highlightsTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    marginBottom: 8,
  },
  highlightsText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  statItem: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  statLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: 'white',
    marginTop: 8,
  },
  statValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: 'white',
    marginTop: 4,
  },
});