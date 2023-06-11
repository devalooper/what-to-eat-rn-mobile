import React from 'react';
import { ScrollView, Box, Text, Image } from 'native-base';


export function FoodDetail({ route }) {
  const { item } = route.params;

  return (
    <ScrollView>
      <Box p="2">
        <Text fontSize="xl" bold pb="3">
          Food Details
        </Text>
        <Box>
          <Text bold>Title:</Text>
          <Text>{item.title}</Text>
        </Box>
        <Box>
          <Text bold>Cook Time:</Text>
          <Text>{item.cookTime}</Text>
        </Box>
        <Box>
          <Text bold>Instructions:</Text>
          {item.instructions.map((instruction, index) => (
            <Text key={index}>{`${index + 1}. ${instruction}`}</Text>
          ))}
        </Box>
        <Box mt="4">
          <Image
            source={{ uri: item.image }}
            alt={item.title}
            size="xl"
            resizeMode="contain"
          />
        </Box>
      </Box>
    </ScrollView>
  );
}
