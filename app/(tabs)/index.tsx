import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import TagInput from '../../components/TagInput';

export default function Home() {
  return (
    <View style={styles.container}>
      {/* <Text lightColor="#7f4343" darkColor="rgba(255,255,255,0.1)">Please Enter Ingredients</Text> */}
      {/* //TODO:: ADD A INPUT TO ADD TAGS TO THE ARRAY */}
      <TagInput/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});