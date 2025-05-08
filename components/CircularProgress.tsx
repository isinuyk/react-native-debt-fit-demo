import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  Easing,
} from 'react-native-reanimated';
// import { Canvas, Path, Skia, SweepGradient, vec, Shadow } from '@shopify/react-native-skia';
import { useTheme } from '@/context/ThemeContext';

type CircularProgressProps = {
  progress: number; // 0 to 1
  size: number;
  strokeWidth: number;
  title?: string;
  value: string;
  subtitle?: string;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  valueStyle?: TextStyle;
  subtitleStyle?: TextStyle;
};

// const AnimatedPath = Animated.createAnimatedComponent(Path);

export const CircularProgress = ({
  progress,
  size,
  strokeWidth,
  title,
  value,
  subtitle,
  style,
  titleStyle,
  valueStyle,
  subtitleStyle,
}: CircularProgressProps) => {
  const { theme } = useTheme();
  const animatedProgress = useSharedValue(0);
  
  useEffect(() => {
    animatedProgress.value = withTiming(progress, {
      duration: 1500,
      easing: Easing.bezierFn(0.16, 1, 0.3, 1),
    });
  }, [progress]);

  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  
  // Create circle path
  // const path = Skia.Path.Make();
  // path.addCircle(center, center, radius);

  const animatedProps = useAnimatedProps(() => {
    const sweepAngle = animatedProgress.value * 360;
    
    return {
      // Only render up to current progress
      start: 0,
      end: sweepAngle,
    };
  });

  return (
    <View style={[styles.container, { width: size, height: size }, style]}>

      
      <View style={styles.content}>
        {title && <Text style={[styles.title, { color: theme.text.secondary }, titleStyle]}>{title}</Text>}
        <Text style={[styles.value, { color: theme.accent.primary }, valueStyle]}>{value}</Text>
        {subtitle && <Text style={[styles.subtitle, { color: theme.text.secondary }, subtitleStyle]}>{subtitle}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  value: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
});