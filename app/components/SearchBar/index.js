import React from 'react';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native';
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
SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
