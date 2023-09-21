import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 12,
  },
  textContainer: {
    backgroundColor: '#FFFFFF',
    height: 'auto',
    padding: 10,
    marginBottom: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#ecf0f1',
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.05,
    elevation: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
    marginTop: 10,
  },
  description: {
    marginTop: 7,
  },
  imageContainer: {
    marginTop: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.05,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 350,
    borderTopStartRadius: 3,
    borderTopEndRadius: 3,
  },
  button: {
    flexDirection: 'row',
    width: 180,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#2196F3',
    borderRadius: 3,
  },
  buttonText: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    color: '#FFFFFF',
    fontSize: 18,
  },
  addToCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  price: {
    fontSize: 20,
  },
  icon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
});
