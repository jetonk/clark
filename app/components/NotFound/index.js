import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export function NotFound({}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Products not found..</Text>
    </View>
  );
}
