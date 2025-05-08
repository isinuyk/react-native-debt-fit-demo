import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis, VictoryLabel } from 'victory-native';
import { useTheme } from '@/context/ThemeContext';

type PerformanceChartProps = {
  data: Array<{ x: string; y: number }>;
  height?: number;
  width?: number;
};

export const PerformanceChart = ({ 
  data, 
  height = 300, 
  width = Dimensions.get('window').width - 40 
}: PerformanceChartProps) => {
  const { theme } = useTheme();
  
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.text.primary }]}>
        Weekly Progress
      </Text>
      
      <VictoryChart
        theme={VictoryTheme.material}
        height={height}
        width={width}
        domainPadding={20}
        padding={{ top: 10, bottom: 40, left: 40, right: 20 }}
      >
        <VictoryAxis
          tickFormat={(t) => t}
          style={{
            axis: { stroke: theme.text.secondary, strokeWidth: 1 },
            tickLabels: { fill: theme.text.secondary, fontSize: 12 },
            grid: { stroke: 'transparent' },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(t) => `${t}`}
          style={{
            axis: { stroke: theme.text.secondary, strokeWidth: 1 },
            tickLabels: { fill: theme.text.secondary, fontSize: 12 },
            grid: { stroke: theme.card.border, strokeWidth: 0.5 },
          }}
        />
        <VictoryBar
          data={data}
          style={{
            data: {
              fill: ({ datum }) => {
                // Highlight the highest value
                const maxValue = Math.max(...data.map(d => d.y));
                return datum.y === maxValue
                  ? theme.accent.primary
                  : theme.accent.secondary;
              },
              width: 20,
              borderRadius: 4,
            },
            labels: {
              fill: theme.text.primary,
            },
          }}
          animate={{
            duration: 500,
            onLoad: { duration: 500 },
          }}
          cornerRadius={{ top: 4 }}
          labels={({ datum }) => datum.y}
          labelComponent={
            <VictoryLabel
              dy={-10}
              style={{ fontSize: 14, fill: theme.text.primary }}
            />
          }
        />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
});