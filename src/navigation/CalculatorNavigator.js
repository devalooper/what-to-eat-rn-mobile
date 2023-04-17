import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '@/constants';
import { Calculator } from '@/screens';

const Stack = createNativeStackNavigator();

export function CalculatorNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.calculator} component={Calculator} />
    </Stack.Navigator>
  );
}
