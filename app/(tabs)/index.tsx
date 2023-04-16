import { StyleSheet } from 'react-native';
import { useState } from 'react';

import { Text, View, TextInput } from '../../components/Themed';

export default function Home() {
  const [tags, setTags] = useState<{
    tag: string;
    tagsArray: string[];
  }>({
    tag: '',
    tagsArray: []
  })
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Home Page</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <TextInput >
        <Text lightColor="#7f4343" darkColor="rgba(255,255,255,0.1)">Please Enter Ingredients</Text>
        {/* //TODO:: ADD A INPUT TO ADD TAGS TO THE ARRAY */}
      </TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
