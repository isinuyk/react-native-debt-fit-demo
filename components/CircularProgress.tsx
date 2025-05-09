import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Canvas,
  Skia,
  Paint,
  vec,
  Shadow,
  Group,
  Path,
  PaintStyle,
  StrokeCap,
} from '@shopify/react-native-skia';
import Animated, {
  useSharedValue,
  withTiming,
  useDerivedValue,
} from 'react-native-reanimated';
import { useTheme } from '@/context/ThemeContext';

const TICK_COUNT = 90;

export const CircularProgress = ({
  size = 240,
  strokeWidth = 16,
  progress = 0.6, // 0 → 1
  value = '$6,200',
  subtitle = 'of $10,400',
}) => {
  const animatedProgress = useSharedValue(0);
  const { theme } = useTheme();
  useEffect(() => {
    animatedProgress.value = withTiming(progress, { duration: 1000 });
  }, [progress]);
  const FILLED_COLOR = theme.background.secondary;
  const EMPTY_COLOR = theme.accent.secondary;

  const derivedProgress = useDerivedValue(() => {
    return animatedProgress.value;
  }, [animatedProgress]);

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <View
        style={{
          padding: 5,
          borderWidth: 5,
          borderRadius: (size + 20) / 2,
          backgroundColor: theme.background.primary,
          borderColor: theme.background.secondary,
          shadowRadius: 26,
          shadowColor: theme.background.secondary,
          shadowOffset: { width: 15, height: 15 },
          shadowOpacity: 1,
        }}
      >
        <Canvas
          style={{
            width: size,
            height: size,
          }}
        >
          <Group>
            {[...Array(TICK_COUNT)].map((_, i) => {
              const center = size / 2;
              const radius = center - strokeWidth / 2;
              const tickLength = strokeWidth / 1.5;
              const angle = (i / TICK_COUNT) * 2 * Math.PI;
              const x1 = center + Math.cos(angle) * (radius - tickLength / 2);
              const y1 = center + Math.sin(angle) * (radius - tickLength / 2);
              const x2 = center + Math.cos(angle) * (radius + tickLength / 2);
              const y2 = center + Math.sin(angle) * (radius + tickLength / 2);

              const isFilled = i < derivedProgress.value * TICK_COUNT;

              const path = Skia.Path.Make();
              path.moveTo(x1, y1);
              path.lineTo(x2, y2);

              const paint = Skia.Paint();
              paint.setColor(Skia.Color(isFilled ? FILLED_COLOR : EMPTY_COLOR));
              paint.setStyle(PaintStyle.Stroke);
              paint.setStrokeCap(StrokeCap.Square);
              paint.setStrokeWidth(3);

              return <Path key={`tick-${i}`} path={path} paint={paint} />;
            })}
            <Shadow dx={0} dy={2} blur={6} color="rgba(0,0,0,0.15)" />
          </Group>
        </Canvas>
      </View>

      <View style={styles.content}>
        <Text style={styles.icon}>🔥</Text>
        <Text style={[styles.icon, { color: theme.accent.secondary }]}>
          INTEREST BURNT
        </Text>
        <Text style={[styles.value, { color: theme.accent.primary }]}>
          {value}
        </Text>
        <Text style={[styles.subtitle, { color: theme.accent.secondary }]}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    marginBottom: 4,
  },
  value: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00C853',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
  },
});
