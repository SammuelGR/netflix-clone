import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => (
  <View style={styles.container}>
    <Text>Netflix!</Text>
  </View>
);

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
