import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, TextInput, Image, ScrollView, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '@/actions/UserActions';
import { Button } from '@/components';
import { strings } from '@/localization';
import foods from '@/store/DummyData/foods.js';
import Fuse from 'fuse.js';
import { NAVIGATION } from '@/constants';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook


export function Calculator() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const logoutUser = () => {
    dispatch(logout());
  };

  const handleSearch = () => {
    // Search for food based on the entered term
    const fuse = new Fuse(foods, { keys: ['title'] });
    const result = fuse.search(searchTerm);

    setSearchResult(result.length > 0 ? result[0].item : null);
  };
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Text style={[typography.title, styles.title, { color: colors.text }]}>
        {strings.profile.message}
      </Text>
      <Button title={strings.profile.logout} onPress={logoutUser} /> */}
      <Text>Calculator Page</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search for food..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <Button
          title="Search"
          onPress={handleSearch}
          buttonStyle={styles.searchButton}
          titleStyle={styles.searchButtonText}
        />
      </View>
      {searchResult && (
  <View style={styles.searchResultContainer}>
    <View style={styles.foodItem}>
      <Image style={styles.foodImage} source={{ uri: searchResult.image }} />
      <Text>{searchResult.title}</Text>
      <Text>Calories: {searchResult.calories}</Text>
      <Button
  onPress={() => {
    navigation.navigate(NAVIGATION.foodDetail, { item: searchResult });
  }}
  style={{
    margin: 15,
    flex: 1,
    height: 48,
    // Additional styling properties as needed
  }}
  title="Detay"
/>
    </View>
  </View>
)}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 5,
  },
  searchContainerWrapper: {
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
    overflow: 'auto',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 0,
    width:'auto',
    marginRight:2,
    padding: 8,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 8,
    fontSize: 20,
  },
  searchButton: {
    width: 20,
    height: 'auto',
    borderRadius: 8,
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight:8,
  },
  searchButtonText: {
    fontSize: 14,
    color: 'white',
  },
  searchResultContainer: {
    marginTop: 16,
  },
  foodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  foodImage: {
    width: 48,
    height: 48,
    marginRight: 8,
    borderRadius: 24,
  },
});
