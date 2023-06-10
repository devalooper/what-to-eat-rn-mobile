import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '@/actions/UserActions';
import { Button, LinkButton } from '@/components';
import { strings } from '@/localization';
import { styles } from './Suggestions.styles';
import { typography } from '@/theme';
import {
  Avatar,
  VStack,
  ScrollView,
  Box,
  FlatList,
  HStack,
  Text,
  Heading,
  Spacer,
} from 'native-base';
import { NAVIGATION } from '@/constants';
import foods from '@/store/DummyData/foods.js';

export function Suggestions({ route }) {
  const { tags } = route.params;
  const [suggest, setSuggest] = useState([]);

  let existIngredientCount = 0;
  React.useEffect(() => {
    tags.forEach((tag) => {
      foods.forEach((food) => {
        food.ingredientNames.forEach((ingredient) => {
          if (tag.name.toLowerCase() == ingredient.toLowerCase()) existIngredientCount++;
        });

        if (existIngredientCount >= 3) {
          food.ratio = Math.round((existIngredientCount / food.ingredientNames.length) * 100);
          setSuggest((suggest) => [...suggest, food]);
          existIngredientCount = 0;
        } else return null;
      });
    });
    return () => setSuggest([]);
  }, []);

  return (
    <ScrollView>
      <SuggestionList suggest={suggest} />
    </ScrollView>
  );
}

const SuggestionList = ({ suggest }) => {
  return (
    <Box p="2">
      <Heading fontSize="xl" pb="3">
        {strings.suggestions.header}
      </Heading>
      <FlatList
        data={suggest}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: 'muted.50',
            }}
            borderColor="muted.800"
            pl={['0', '4']}
            pr={['0', '5']}
            py="2"
          >
            <HStack space={[2, 3]} justifyContent="space-between">
              <Avatar
                size="48px"
                source={{
                  uri: item.image,
                }}
              />
              <VStack>
                <Text
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.title}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}
                >
                  {item.cookTime}
                </Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                _dark={{
                  color: 'warmGray.50',
                }}
                color="coolGray.800"
                alignSelf="flex-start"
              >
                {item?.ratio}% uyumluzz
              </Text>
              <LinkButton
                to={{ screen: NAVIGATION.foodDetail, params: { suggest } }}
                title="Detay"
                style={typography.smallText}
              />
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.title}
      />
    </Box>
  );
};
