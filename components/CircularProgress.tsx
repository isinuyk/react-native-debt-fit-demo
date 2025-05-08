import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import {
  Canvas,
  Path,
  Skia,
  SweepGradient,
  vec,
  Shadow,
} from '@shopify/react-native-skia';
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  useDerivedValue,
} from 'react-native-reanimated';
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

  const backgroundPath = Skia.Path.Make();
  backgroundPath.addCircle(center, center, radius);

  const animatedPath = useDerivedValue(() => {
    const sweepAngle = animatedProgress.value * 360;
    const path = Skia.Path.Make();
    path.addArc(
      {
        x: center - radius,
        y: center - radius,
        width: radius * 2,
        height: radius * 2,
      },
      -90, // Start from top
      sweepAngle
    );
    return path;
  }, [animatedProgress]);

  return (
    <View style={[styles.container, { width: size, height: size }, style]}>
      <Canvas style={{ flex: 1, height: size, width: size }}>
        {/* Track circle */}
        <Path
          path={backgroundPath}
          style="stroke"
          strokeWidth={strokeWidth}
          color={theme.progress.track}
        />

        {/* Progress arc */}
        <Path path={animatedPath} style="stroke" strokeWidth={strokeWidth}>
          <SweepGradient
            c={vec(center, center)}
            colors={[
              theme.progress.indicatorEnd,
              theme.progress.indicatorStart,
              theme.progress.indicatorEnd,
            ]}
          />
          <Shadow
            dx={0}
            dy={1}
            blur={6}
            color={theme.progress.indicatorStart}
          />
        </Path>
      </Canvas>

      {/* Text content */}
      <View style={styles.content}>
        {title && (
          <Text
            style={[styles.title, { color: theme.text.secondary }, titleStyle]}
          >
            {title}
          </Text>
        )}
        <Text
          style={[styles.value, { color: theme.accent.primary }, valueStyle]}
        >
          {value}
        </Text>
        {subtitle && (
          <Text
            style={[
              styles.subtitle,
              { color: theme.text.secondary },
              subtitleStyle,
            ]}
          >
            {subtitle}
          </Text>
        )}
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
