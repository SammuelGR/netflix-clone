import React from 'react';
import {
  FlatList, StyleSheet, Text, View,
} from 'react-native';
import Movie from './movie';
import api from '../services/api';

export default class Section extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = async () => {
    const { genreId } = this.props;
    const response = await api.get(`/discover/movie?api_key=581af4cd9fd9df5711b3b976997435fb&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genreId}`);

    const { results } = response.data;
    const movies = results.slice(0, 7);

    this.setState({ movies });
  };

  renderItem = ({ item }) => <Movie item={item} navigation={this.props.navigation} />;

  render() {
    const { genre } = this.props;
    const { movies } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.genre}>
          <Text style={styles.genreTxt}>{genre}</Text>
        </View>
        <FlatList
          data={movies}
          decelerationRate={0.8}
          horizontal
          keyExtractor={item => item.id.toString()}
          pagingEnabled
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6d6d6d',
    borderBottomColor: '#bdbdbd',
    borderBottomWidth: 0.8,
    height: 250,
  },
  genre: {
    height: 35,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  genreTxt: {
    color: '#ebebeb',
    fontSize: 21,
    fontWeight: 'bold',
  },
});
