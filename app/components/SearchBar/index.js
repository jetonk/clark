import React from 'react';
import {TextInput} from 'react-native';
// import ArrowIcon from 'app/assets/icons/arrow.png';
import {styles} from './styles';

export function SearchBar({handleSearch}) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Search "
      onChangeText={handleSearch}
    />
  );
}
