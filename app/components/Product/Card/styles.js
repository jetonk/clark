import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 12,
    marginTop: 10,
    marginBottom: 25,
    borderWidth: 0.2,
    borderColor: '#000000',
    borderRadius: 10,
    padding: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.05,
    elevation: 4,
  },
  imageContainer: {
    flex: 1,
    flexBasis: 120,
  },
  middle: {
    flex: 1,
    flexBasis: 80,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  action: {
    flex: 1,
    flexBasis: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  touchable: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    marginTop: 10,
    marginBottom: 5,
  },
  image: {
    width: 150,
    height: 150,
  },
  price: {
    fontSize: 17,
    fontWeight: 500,
    marginTop: 7,
    marginBottom: 15,
  },
});
