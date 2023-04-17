import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '@/constants';
import { Recipes } from '@/screens';

const Stack = createNativeStackNavigator();

export function RecipesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.recipes} component={Recipes} />
    </Stack.Navigator>
  );
}
