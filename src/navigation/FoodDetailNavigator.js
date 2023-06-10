import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '@/constants';
import { FoodDetail } from '@/screens';

const Stack = createNativeStackNavigator();

export function FoodDetailNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.foodDetail} component={FoodDetail} />
    </Stack.Navigator>
  );
}
