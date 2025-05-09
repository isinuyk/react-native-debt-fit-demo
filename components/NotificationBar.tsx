import React, { useRef, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Bell } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import BottomSheet from '@gorhom/bottom-sheet';

type NotificationBarProps = {
  notificationCount: number;
  title: string;
  onPress?: () => void;
};

export const NotificationBar = ({
  notificationCount,
  title,
  onPress,
}: NotificationBarProps) => {
  const { theme } = useTheme();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['12%', '55%', '85%'];

  const handlePress = useCallback(() => {
    if (onPress) {
      onPress();
    } else {
      bottomSheetRef.current?.expand();
    }
  }, [onPress]);

  return (
    <>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        style={{
          borderColor: theme.background.secondary,
          backgroundColor: theme.background.secondary,
          borderTopLeftRadius: 20,
          borderWidth: 3,
          borderTopRightRadius: 20,
          shadowColor: theme.background.secondary,
          shadowOffset: { width: 15, height: 22 },
          shadowOpacity: 0.25,
          shadowRadius: 15,
        }}
        backgroundStyle={{
          backgroundColor: theme.background.primary,
          borderStartColor: theme.card.border,
          borderTopColor: theme.card.border,
        }}
        handleIndicatorStyle={{
          backgroundColor: theme.text.secondary,
        }}
      >
        <View
          style={[
            styles.bottomSheetContent,
            { backgroundColor: theme.background.primary },
          ]}
        >
          <Text
            style={[styles.bottomSheetTitle, { color: theme.text.primary }]}
          >
            {notificationCount} {title}
          </Text>
          {/* Sample notification content */}
          <View
            style={[styles.notification, { borderColor: theme.card.border }]}
          >
            <Text
              style={[styles.notificationTitle, { color: theme.text.primary }]}
            >
              Workout reminder
            </Text>
            <Text
              style={[styles.notificationDesc, { color: theme.text.secondary }]}
            >
              Don't forget your scheduled workout today at 6:00 PM.
            </Text>
          </View>

          <View
            style={[styles.notification, { borderColor: theme.card.border }]}
          >
            <Text
              style={[styles.notificationTitle, { color: theme.text.primary }]}
            >
              Achievement unlocked
            </Text>
            <Text
              style={[styles.notificationDesc, { color: theme.text.secondary }]}
            >
              Congratulations! You've completed 5 workouts this week.
            </Text>
          </View>
        </View>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    alignItems: 'center',
    paddingTop: 28,
    marginBottom: 12,
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
  },
  bottomSheetContent: {
    flex: 1,
    padding: 16,
  },
  bottomSheetTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 26,
  },
  notification: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 12,
  },
  notificationTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },
  notificationDesc: {
    fontSize: 14,
    lineHeight: 20,
  },
});
