import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

export function ProductDetails({route}) {
  const {product} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: product.image}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.name}>{product.name}</Text>
    </View>
  );
}
