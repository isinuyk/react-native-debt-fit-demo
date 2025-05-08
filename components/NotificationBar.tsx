import React, { useRef, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Bell } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import BottomSheet from '@gorhom/bottom-sheet';

type NotificationBarProps = {
  notificationCount: number;
  title: string;
  onPress?: () => void;
};

export const NotificationBar = ({ notificationCount, title, onPress }: NotificationBarProps) => {
  const { theme } = useTheme();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['25%', '50%', '75%'];

  const handlePress = useCallback(() => {
    if (onPress) {
      onPress();
    } else {
      bottomSheetRef.current?.expand();
    }
  }, [onPress]);

  return (
    <>
      <TouchableOpacity
        style={[
          styles.container,
          {
            backgroundColor: theme.card.background,
            borderColor: theme.card.border,
          },
        ]}
        onPress={handlePress}
        activeOpacity={0.8}
      >
        <View style={styles.content}>
          <Bell size={18} color={theme.text.secondary} />
          <Text style={[styles.title, { color: theme.text.primary }]}>
            {notificationCount} {title}
          </Text>
        </View>
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        backgroundStyle={{ backgroundColor: theme.card.background }}
        handleIndicatorStyle={{ backgroundColor: theme.text.secondary }}
      >
        <View style={[styles.bottomSheetContent, { backgroundColor: theme.card.background }]}>
          <Text style={[styles.bottomSheetTitle, { color: theme.text.primary }]}>
            {title}
          </Text>
          {/* Sample notification content */}
          <View style={[styles.notification, { borderColor: theme.card.border }]}>
            <Text style={[styles.notificationTitle, { color: theme.text.primary }]}>
              Workout reminder
            </Text>
            <Text style={[styles.notificationDesc, { color: theme.text.secondary }]}>
              Don't forget your scheduled workout today at 6:00 PM.
            </Text>
          </View>
          
          <View style={[styles.notification, { borderColor: theme.card.border }]}>
            <Text style={[styles.notificationTitle, { color: theme.text.primary }]}>
              Achievement unlocked
            </Text>
            <Text style={[styles.notificationDesc, { color: theme.text.secondary }]}>
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
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 12,
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
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
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