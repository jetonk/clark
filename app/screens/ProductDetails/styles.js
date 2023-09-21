import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 12,
    marginTop: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 10,
  },
  imageContainer: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.05,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 350,
    borderRadius: 15,
  },
});
