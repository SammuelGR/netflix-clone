import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const App = () => (
  <View style={styles.container}>
    <Text>Netflix!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
