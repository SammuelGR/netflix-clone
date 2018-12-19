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
        <Text style={[styles.nameTxt, item.name.length > 33 ? styles.longNameTxt : null]}>
          {item.name}
        </Text>
      </View>
    </View>
  );
};

export default Movie;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5,
    height: 230,
    width,
  },
  poster: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  longNameTxt: {
    fontSize: 13,
  },
  nameTxt: {
    fontSize: 17,
    marginBottom: 17,
    textAlign: 'center',
  },
});
