import React from 'react';
import {
  Dimensions, Image, StyleSheet, Text, TouchableHighlight, View,
} from 'react-native';


const chooseImage = (item) => {
  if (item.backdrop_path) return `https://image.tmdb.org/t/p/w780/${item.backdrop_path}`;
  if (item.poster_path) return `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
  return 'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png';
}

const Movie = (props) => {
  const { item, navigation } = props;
  const image = chooseImage(item);

  return (
    <TouchableHighlight
      onPress={() => navigation.navigate('Details', {
        id: item.id,
        name: item.title,
      })
      }
    >
      <View style={styles.container}>
        <Image source={{ uri: image }} resizeMode="contain" style={styles.backdrop} />
        <Text style={[styles.nameTxt, item.title.length > 33 ? styles.nameTxtLong : null]}>
          {item.title}
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
