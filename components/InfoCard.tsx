import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { Clock, DollarSign, CircleHelp as HelpCircle } from 'lucide-react-native';

interface InfoCardProps {
  title: string;
  value: string;
  unit: string;
  iconName: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  value,
  unit,
  iconName,
}) => {
  const { theme } = useTheme();
  
  const renderIcon = () => {
    switch (iconName) {
      case 'clock':
        return <Clock size={16} color={theme.colors.textSecondary} />;
      case 'dollar-sign':
        return <DollarSign size={16} color={theme.colors.textSecondary} />;
      default:
        return <HelpCircle size={16} color={theme.colors.textSecondary} />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={[styles.title, { color: theme.colors.textSecondary }]}>
          {title}
        </Text>
        <View style={styles.iconContainer}>
          {renderIcon()}
        </View>
      </View>
      
      <View style={styles.valueRow}>
        <Text 
          style={[
            styles.value, 
            { color: title === 'Time Remaining' ? theme.colors.primary : theme.colors.textPrimary }
          ]}
        >
          {value}
        </Text>
        <Text style={[styles.unit, { color: theme.colors.textSecondary }]}>
          {unit}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    marginRight: 4,
  },
  iconContainer: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  value: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    marginRight: 2,
  },
  unit: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
});

export default InfoCard;