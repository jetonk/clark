import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import ArrowIcon from 'app/assets/icons/arrow.png';
import {styles} from './styles';

export function Card({item, handleCardOnClick}) {
  const {name, image, price} = item;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={handleCardOnClick}
      style={styles.item}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.middle}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>{price}&euro; x 1kg</Text>
      </View>
      <View style={styles.action}>
        <Image source={ArrowIcon} />
      </View>
    </TouchableOpacity>
  );
}
Card.propTypes = {
  item: PropTypes.object.isRequired,
  handleCardOnClick: PropTypes.func.isRequired,
};
