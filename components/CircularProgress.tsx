import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { Flame } from 'lucide-react-native';
import Svg, { Circle } from 'react-native-svg';

interface CircularProgressProps {
  title: string;
  value: string;
  total: string;
  progress: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  title,
  value,
  total,
  progress,
}) => {
  const { theme } = useTheme();
  const size = 240;
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress * circumference);

  // Create tick marks around the circle
  const tickMarks = Array.from({ length: 60 }).map((_, index) => {
    const rotation = index * 6; // 360 degrees / 60 ticks = 6 degrees per tick
    const isLongTick = index % 5 === 0;
    const tickLength = isLongTick ? 10 : 5;
    
    return (
      <View
        key={index}
        style={[
          styles.tickMark,
          {
            height: tickLength,
            transform: [
              { rotate: `${rotation}deg` },
              { translateY: -size / 2 + tickLength / 2 },
            ],
            backgroundColor: isLongTick 
              ? 'rgba(255, 255, 255, 0.4)' 
              : 'rgba(255, 255, 255, 0.2)',
          },
        ]}
      />
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.tickMarksContainer}>
        {tickMarks}
      </View>
      
      <Svg width={size} height={size} style={styles.svg}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={theme.colors.primary}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
        />
      </Svg>
      
      <View style={styles.contentContainer}>
        <View style={[styles.iconContainer, { backgroundColor: theme.colors.primary }]}>
          <Flame size={24} color="white" />
        </View>
        
        <Text style={[styles.title, { color: theme.colors.textPrimary }]}>
          {title}
        </Text>
        
        <Text style={[styles.value, { color: theme.colors.primary }]}>
          {value}
        </Text>
        
        <Text style={[styles.total, { color: theme.colors.textSecondary }]}>
          {total}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 240,
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tickMarksContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tickMark: {
    position: 'absolute',
    width: 2,
    borderRadius: 1,
  },
  svg: {
    position: 'absolute',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    letterSpacing: 1.2,
    marginBottom: 8,
  },
  value: {
    fontFamily: 'Inter-Bold',
    fontSize: 36,
    marginBottom: 4,
  },
  total: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
});

export default CircularProgress;