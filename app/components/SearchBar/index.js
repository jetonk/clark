import React from 'react';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native';
import {styles} from './styles';

export function SearchBar({search, handleSearch}) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Search by name.."
      placeholderTextColor="#000000"
      value={search}
      onChangeText={handleSearch}
    />
  );
}
SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
