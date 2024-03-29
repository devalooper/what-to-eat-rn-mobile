import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '@/constants';
import { Home, Suggestions, FoodDetail } from '@/screens';

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.home} component={Home} />
      <Stack.Screen name={NAVIGATION.suggestions} component={Suggestions} />
      <Stack.Screen name={NAVIGATION.foodDetail} component={FoodDetail} />
    </Stack.Navigator>
  );
}
