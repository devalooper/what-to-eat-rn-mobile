import { Box, Text } from 'native-base';

export function FoodDetail({ route }) {
  console.log(route)

    return (
      <Box>
      <Text>
        {JSON.stringify(route.params)}
      </Text>
      </Box>
    )
}