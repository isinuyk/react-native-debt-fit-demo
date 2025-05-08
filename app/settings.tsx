import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { UserAvatar } from '@/components/UserAvatar';
import { useTheme } from '@/context/ThemeContext';
import { ChevronLeft, User, Bell, Lock, CircleHelp as HelpCircle, LogOut } from 'lucide-react-native';
import { ThemeSelector } from '@/components/ThemeSelector';
import { useRouter } from 'expo-router';

const settingsOptions = [
  {
    id: 'profile',
    icon: User,
    title: 'Profile',
    description: 'Manage your profile information',
  },
  {
    id: 'notifications',
    icon: Bell,
    title: 'Notifications',
    description: 'Configure your notification preferences',
  },
  {
    id: 'privacy',
    icon: Lock,
    title: 'Privacy & Security',
    description: 'Control your data and privacy settings',
  },
  {
    id: 'help',
    icon: HelpCircle,
    title: 'Help & Support',
    description: 'Get help and contact support',
  },
];

export default function SettingsScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  
  return (
    <View style={[styles.container, { backgroundColor: theme.background.primary }]}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <ChevronLeft size={24} color={theme.text.primary} />
        </TouchableOpacity>
        
        <Text style={[styles.headerTitle, { color: theme.text.primary }]}>
          Settings
        </Text>
        
        <View style={styles.placeholder} />
      </View>
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileSection}>
          <UserAvatar 
            imageUrl="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" 
            size={80}
          />
          
          <View style={styles.profileInfo}>
            <Text style={[styles.profileName, { color: theme.text.primary }]}>
              Jane Doe
            </Text>
            <Text style={[styles.profileEmail, { color: theme.text.secondary }]}>
              jane.doe@example.com
            </Text>
          </View>
        </View>
        
        <ThemeSelector />
        
        <View style={styles.optionsContainer}>
          {settingsOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionItem,
                { borderColor: theme.card.border }
              ]}
            >
              <View style={styles.optionIconContainer}>
                <option.icon size={20} color={theme.accent.primary} />
              </View>
              
              <View style={styles.optionContent}>
                <Text style={[styles.optionTitle, { color: theme.text.primary }]}>
                  {option.title}
                </Text>
                <Text style={[styles.optionDescription, { color: theme.text.secondary }]}>
                  {option.description}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        
        <TouchableOpacity
          style={[
            styles.logoutButton,
            { backgroundColor: theme.card.background, borderColor: theme.card.border }
          ]}
        >
          <LogOut size={20} color={theme.accent.tertiary} />
          <Text style={[styles.logoutText, { color: theme.accent.tertiary }]}>
            Log Out
          </Text>
        </TouchableOpacity>
        
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
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Inter-Bold',
  },
  placeholder: {
    width: 24,
  },
  scrollView: {
    flex: 1,
  },
  profileSection: {
    alignItems: 'center',
    padding: 24,
    marginBottom: 16,
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: 16,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Inter-Bold',
  },
  profileEmail: {
    fontSize: 14,
    marginTop: 4,
    fontFamily: 'Inter-Medium',
  },
  optionsContainer: {
    padding: 16,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  optionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 24,
    gap: 8,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
  },
  spacer: {
    height: 100,
  },
});