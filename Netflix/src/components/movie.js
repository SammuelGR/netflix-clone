import React from 'react';
import {
  Dimensions, Image, StyleSheet, Text, View,
} from 'react-native';

const Movie = (props) => {
  const { item } = props;
  return (
    <View>
      <View style={styles.container}>
        <Image source={{ uri: item.backdrop }} resizeMode="contain" style={styles.poster} />
        <Text>{item.name}</Text>
      </View>
    </View>
  );
};

export default Movie;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    padding: 15,
    height: 230,
    width,
  },
  poster: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
});
