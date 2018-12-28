import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Poster = props => (
  <Image source={{ uri: props.posterPath }} style={styles.img} resizeMode="contain" />
);

export default Poster;

const styles = StyleSheet.create({
  img: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
});
