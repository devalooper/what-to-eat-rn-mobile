import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '@/actions/UserActions';
import { Button } from '@/components';
import { strings } from '@/localization';
import { styles } from './Suggestions.styles';
import { typography } from '@/theme';
import { ScrollView } from 'native-base';

export function Suggestions({ route }) {
  const { tags } = route.params;
  const { colors } = useTheme();

  return (
    <ScrollView >
      <Text>Recipes Page</Text>
      <Text>
        {
          JSON.stringify({ tags }, null, 2)
        }
      </Text>
    </ScrollView>
  );
}
