import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';
import TabBarIcon from '../../components/Icon';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Ingredients',
          tabBarIcon: ({ color, focused, }) => {
            if (focused) return <TabBarIcon type='Ionicons' name="fast-food" color={color} />
            return <TabBarIcon type='Ionicons' name="fast-food-outline" color={color} />
          }
          // headerRight: () => (
          //   <Link href="/modal" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name="info-circle"
          //           size={25}
          //           color={Colors[colorScheme ?? 'light'].text}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
      <Tabs.Screen
        name="recipes"
        options={{
          title: 'Recipes',
          tabBarIcon: ({ color, focused }) => {
            if (focused) return <TabBarIcon type='Ionicons' name="book" color={color} />
            return <TabBarIcon type='Ionicons' name="book-outline" color={color} />

          },
        }}
      />
      <Tabs.Screen
        name="calorieCalculator"
        options={{
          title: 'Calorie Calculator',
          tabBarIcon: ({ color, focused }) => {
            if (focused) return <TabBarIcon type='Ionicons' name="calculator" color={color} />
            return <TabBarIcon type='Ionicons' name="calculator-outline" color={color} />
          }
        }} />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => {
            if (focused) return <TabBarIcon type='Ionicons' name="settings" color={color} />
            return <TabBarIcon type='Ionicons' name="settings-outline" color={color} />
          }
        }}
      />
    </Tabs>
  );
}
