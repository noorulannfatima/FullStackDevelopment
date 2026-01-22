import { Linking } from 'react-native';
import { useQuickActionCallback } from 'expo-quick-actions/hooks';

// https://github.com/EvanBacon/expo-quick-actions
export const useQuickActions = () => {
  useQuickActionCallback((action) => {
    if (action.id === '0') {
      Linking.openURL('mailto:simon@galaxies.dev?subject=Matrix Manager Support Request');
    }
  });
};
