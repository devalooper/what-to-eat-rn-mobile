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
    paddingTop: 10,
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
    marginBottom: 1,
  }
});
