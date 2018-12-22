import React from 'react';
import {
  Image, ScrollView, StyleSheet, Text, View,
} from 'react-native';

import Genres from '../components/genres';

import { dateConversor } from '../util';

export default class Details extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const title = navigation.state.params.name;

    return {
      title,
      headerStyle: {
        backgroundColor: '#9b0000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
    };
  };

  render() {
    const { navigation } = this.props;
    const movieTitle = navigation.state.params.name;
    const { genres, overview, releaseDate, runtime, stars } = navigation.state.params;
    const star = require('../../assets/star.png');

    return (
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <View style={styles.poster}>
            <Image
              source={{ uri: navigation.state.params.poster }}
              resizeMode="contain"
              style={styles.posterImg}
            />
          </View>

          <View style={styles.details}>
            <Text style={[styles.titleTxt, movieTitle.length > 30 ? styles.titleTxtLong : null]}>
              {movieTitle}
            </Text>

            <View style={styles.detailsLine}>
              <Text style={styles.detailsTxt}>{dateConversor(releaseDate)}</Text>
              <Text style={styles.detailsTxt}>{runtime}min</Text>
              <View style={styles.stars}>
                <Text style={styles.detailsTxt}>{stars}</Text>
                <Image source={star} style={styles.starImg} />
              </View>
            </View>

            <Genres genres={genres} />

          </View>
        </View>

        <View style={styles.overview}>
          <Text style={styles.overviewTxt}>{overview}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6d6d6d',
    flex: 1,
  },
  details: {
    flex: 1,
    height: 272,
    paddingBottom: 10,
    paddingTop: 35,
    paddingHorizontal: 3,
  },
  detailsLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  detailsTxt: {
    color: '#ebebeb',
    height: 20,
  },
  overview: {
    padding: 15,
  },
  overviewTxt: {
    color: '#ebebeb',
    fontSize: 17,
    padding: 10,
  },
  poster: {
    padding: 10,
    height: 272,
    width: 148,
  },
  posterImg: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  starImg: {
    height: 20,
    width: 20,
  },
  stars: {
    flexDirection: 'row',
  },
  titleTxt: {
    color: '#ebebeb',
    fontSize: 20,
    fontWeight: '900',
  },
  titleTxtLong: {
    fontSize: 15,
  },
  top: {
    flexDirection: 'row',
  },
});
