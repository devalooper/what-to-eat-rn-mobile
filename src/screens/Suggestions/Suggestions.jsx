import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Box, FlatList, HStack, Text, Heading, Spacer, Image, Avatar, VStack, Button } from 'native-base';
import { NAVIGATION } from '@/constants';
import foods from '@/store/DummyData/foods';
import { styles } from './Suggestions.styles';

export function Suggestions({ route }) {
  const { tags } = route.params;
  const [suggest, setSuggest] = React.useState([]);

  let existIngredientCount = 0;

  React.useEffect(() => {
    tags.forEach((tag) => {
      foods.forEach((food) => {
        food.ingredientNames.forEach((ingredient) => {
          if (tag.name.toLowerCase() === ingredient.toLowerCase()) {
            existIngredientCount++;
          }
        });

        if (existIngredientCount >= 3) {
          food.ratio = Math.round((existIngredientCount / food.ingredientNames.length) * 100);
          setSuggest((suggest) => [...suggest, food]);
          existIngredientCount = 0;
        }
      });
    });
  }, [tags]);

  const navigation = useNavigation();

  const handleSearchByCalorie = () => {
    navigation.navigate(NAVIGATION.calculator);
  };

  return (
    <Box>
      <Button onPress={handleSearchByCalorie} style={styles.searchButton}>
        <Text style={styles.searchButtonText}>Search by Calorie</Text>
      </Button>
      <FlatList
        data={suggest}
        renderItem={({ item }) => <SuggestionItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
}

const SuggestionItem = ({ item }) => {
  const navigation = useNavigation();

  return (
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
        <Avatar size="48px" source={{ uri: item.image }} />
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
            Cook Time: {item.cookTime}
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
          {item.ratio}% uyumlu
        </Text>
        <Button
          onPress={() => {
            navigation.navigate(NAVIGATION.foodDetail, { item });
          }}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Detay</Text>
        </Button>
      </HStack>
    </Box>
  );
};
