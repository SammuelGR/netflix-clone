import React from 'react';
import {
  Dimensions, Image, StyleSheet, Text, TouchableHighlight, View,
} from 'react-native';

const Movie = (props) => {
  const { item } = props;
  return (
    <TouchableHighlight onPress={() => props.navigation.navigate('Details', { name: item.name })}>
      <View style={styles.container}>
        <Image source={{ uri: item.backdrop }} resizeMode="contain" style={styles.poster} />
        <Text style={[styles.nameTxt, item.name.length > 33 ? styles.longNameTxt : null]}>
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
  poster: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  longNameTxt: {
    fontSize: 13,
  },
  nameTxt: {
    color: '#ebebeb',
    fontSize: 17,
    marginBottom: 20,
    textAlign: 'center',
  },
});
