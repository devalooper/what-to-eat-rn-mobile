import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  wrapper: {
    minHeight: "80%",
    justifyContent: 'center',
  },
  input: {
    borderRadius: 4,
    padding: 2,
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  tagContainer: {
    height: "40%",
  },
  popularTagsContainer: {
    height: "40%",
  },
  badge: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'white',
    padding: 2,
  },
  badgeText: {
    color: 'white',
    marginLeft: 1,
  }
});
