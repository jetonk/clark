import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export function Spinner({}) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}
