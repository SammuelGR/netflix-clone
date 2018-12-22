import React from 'react';
import {
  Dimensions, Image, StyleSheet, Text, TouchableHighlight, View,
} from 'react-native';

const Movie = (props) => {
  const { item } = props;

  return (
    <TouchableHighlight
      onPress={() => props.navigation.navigate('Details', {
        genres: item.genres,
        name: item.name,
        overview: item.overview,
        poster: item.poster,
        releaseDate: item.release_date,
        runtime: item.runtime,
        stars: item.vote_average,
      })
      }
    >
      <View style={styles.container}>
        <Image source={{ uri: item.backdrop }} resizeMode="contain" style={styles.backdrop} />
        <Text style={[styles.nameTxt, item.name.length > 33 ? styles.nameTxtLong : null]}>
          {item.name}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default Movie;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6d6d6d',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5,
    height: 230,
    width,
  },
  backdrop: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  nameTxt: {
    color: '#ebebeb',
    fontSize: 17,
    marginBottom: 20,
    textAlign: 'center',
  },
  nameTxtLong: {
    fontSize: 13,
  },
});
