import React from 'react';

import {
  Dimensions, FlatList, StyleSheet, Text, View,
} from 'react-native';

export default class Section extends React.Component {
  state = {
    movies: [
      {
        name: 'Filme 1',
        id: '1',
      },
      {
        name: 'Filme 2',
        id: '2',
      },
      {
        name: 'Filme 3',
        id: '3',
      },
      {
        name: 'Filme 4',
        id: '4',
      },
    ],
  };

  renderItem = ({ item }) => (
    <View style={styles.movie}>
      <Text>{item.name}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.genre}</Text>
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
    height: 170,
  },
  movie: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
  },
});
