import React from 'react';
import {
  FlatList, StyleSheet, Text, View,
} from 'react-native';
import Movie from './movie';

export default class Section extends React.Component {
  state = {
    movies: [
      {
        backdrop: 'https://image.tmdb.org/t/p/w780//urPYbqQnMMu5Ug09nI0KAGabbDX.jpg',
        genres: [
          {
            "id": 28,
            "name": "Ação"
          },
          {
            "id": 12,
            "name": "Aventura"
          },
          {
            "id": 878,
            "name": "Ficção científica"
          }
        ],
        id: '1',
        name: 'Bumblebee',
        poster: 'https://image.tmdb.org/t/p/w500//sWtotHJvTUBeX9HYm0KT4H44B0c.jpg',
        release_date: '2018-12-07',
        runtime: 114,
        vote_average: 6.9,
      },
      {
        backdrop: 'https://image.tmdb.org/t/p/w780//5A2bMlLfJrAfX9bqAibOL2gCruF.jpg',
        genres: [
          {
            "id": 28,
            "name": "Ação"
          },
          {
            "id": 12,
            "name": "Aventura"
          },
          {
            "id": 878,
            "name": "Ficção científica"
          }
        ],
        id: '2',
        name: 'Aquaman',
        poster: 'https://image.tmdb.org/t/p/w500//4CKtfsbNqAf0uDfpLfKQyig6SDu.jpg',
        release_date: '2018-12-07',
        runtime: 114,
        vote_average: 6.9,
      },
      {
        backdrop: 'https://image.tmdb.org/t/p/w780//wDN3FIcQQ1HI7mz1OOKYHSQtaiE.jpg',
        genres: [
          {
            "id": 28,
            "name": "Ação"
          },
          {
            "id": 12,
            "name": "Aventura"
          },
          {
            "id": 878,
            "name": "Ficção científica"
          }
        ],
        id: '3',
        name: 'Animais Fantásticos: Os Crimes de Grindelwald',
        poster: 'https://image.tmdb.org/t/p/w500//qflbWgNtthGGl8nURPfffGEgZu6.jpg',
        release_date: '2018-12-07',
        runtime: 114,
        vote_average: 6.9,
      },
      {
        genres: [
          {
            "id": 28,
            "name": "Ação"
          },
          {
            "id": 12,
            "name": "Aventura"
          },
          {
            "id": 878,
            "name": "Ficção científica"
          }
        ],
        id: '4',
        name: 'Filme 4',
        release_date: '2018-12-07',
        runtime: 114,
        vote_average: 6.9,
      },
    ],
  };

  renderItem = ({ item }) => <Movie item={item} navigation={this.props.navigation} />;

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
