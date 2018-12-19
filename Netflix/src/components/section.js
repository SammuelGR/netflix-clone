import React from 'react';
import {
  FlatList, StyleSheet, Text, View,
} from 'react-native';
import Movie from './movie';

export default class Section extends React.Component {
  state = {
    movies: [
      {
        backdrop: 'https://image.tmdb.org/t/p/w780//wtZj5nn6hVwgakPdg6y6gm3eFXU.jpg',
        id: '1',
        name: 'Bumblebee',
      },
      {
        backdrop: 'https://image.tmdb.org/t/p/w780//5A2bMlLfJrAfX9bqAibOL2gCruF.jpg',
        id: '2',
        name: 'Aquaman',
      },
      {
        backdrop: 'https://image.tmdb.org/t/p/w780//wDN3FIcQQ1HI7mz1OOKYHSQtaiE.jpg',
        id: '3',
        name: 'Animais Fantásticos: Os Crimes de Grindelwald',
      },
      {
        id: '4',
        name: 'Filme 4',
      },
    ],
  };

  renderItem = ({ item }) => <Movie item={item} />;

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.genre}>
          <Text style={styles.genreTxt}>{this.props.genre}</Text>
        </View>
        <FlatList
          data={this.state.movies}
          decelerationRate={0.8}
          horizontal
          keyExtractor={item => item.id}
          pagingEnabled
          renderItem={this.renderItem}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    borderBottomColor: '#000',
    borderBottomWidth: 0.8,
    height: 250,
  },
  genre: {
    height: 35,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  genreTxt: {
    fontSize: 20,
  },
});
