import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

export function ProductDetails({route}) {
  const {
    product: {name, image, description, price},
  } = route.params;

  const createTwoButtonAlert = () => {
    Alert.alert('Added to cart', `${name} / $${price}`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.addToCart}>
        <Text style={styles.price}>Price: ${price}</Text>
        <TouchableOpacity onPress={createTwoButtonAlert}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add to cart</Text>
            <Icon name="cart-outline" style={styles.icon} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
