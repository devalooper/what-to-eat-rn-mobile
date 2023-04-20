import { useTheme } from '@react-navigation/native';
import React from 'react';
// import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '@/actions/UserActions';
import { Button } from '@/components';
import { strings } from '@/localization';
import { styles } from './Suggestions.styles';
import { typography } from '@/theme';

import { Avatar, VStack, ScrollView, Box, FlatList, HStack, Text, Heading, Spacer } from 'native-base';
import foods from '@/store/DummyData/foods.js'

export function Recipes({ route }) {
  return (
    <ScrollView >
      <FoodList />
    </ScrollView>
  );
}

const FoodList = () => {
  return (
    <Box p='2'>
      <Heading fontSize="xl" pb="3">
        Tavsiyeler
      </Heading>
      <FlatList data={foods} renderItem={({
        item
      }) => <Box borderBottomWidth="1" _dark={{
        borderColor: "muted.50"
      }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
          <HStack space={[2, 3]} justifyContent="space-between">
            <Avatar size="48px" source={{
              uri: item.image
            }} />
            <VStack>
              <Text _dark={{
                color: "warmGray.50"
              }} color="coolGray.800" bold>
                {item.title}
              </Text>
              <Text color="coolGray.600" _dark={{
                color: "warmGray.200"
              }}>
                {item.cookTime}
              </Text>
            </VStack>
            <Spacer />
            <Text fontSize="xs" _dark={{
              color: "warmGray.50"
            }} color="coolGray.800" alignSelf="flex-start">
              {item.id}% uyumlu
            </Text>
          </HStack>
        </Box>} keyExtractor={item => item.id} />
    </Box>
  );
};