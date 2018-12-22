import React from 'react';
import {
  Image, ScrollView, StyleSheet, Text, View,
} from 'react-native';
import Genres from '../components/genres';
import { dateConversor } from '../util';
import api from '../services/api';

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

  constructor(props) {
    super(props);
    
    this.state = {
      details: [],
    };
  }

  componentDidMount() {
    this.loadDetails();
  }

  loadDetails = async () => {
    const { navigation } = this.props;
    const { id } = navigation.state.params;
    const response = await api.get(`/movie/${id}?api_key=581af4cd9fd9df5711b3b976997435fb&language=pt-BR`);

    const details = response.data;

    this.setState({ details });
    console.log(details);
  };

  render() {
    const { details } = this.state;
    const { genres, overview, poster_path, release_date, runtime, title, vote_average } = details;
    const star = require('../../assets/star.png');
    const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <View style={styles.poster}>
            <Image
              source={{ uri: poster }}
              resizeMode="contain"
              style={styles.posterImg}
            />
          </View>

          <View style={styles.details}>
            <Text style={[styles.titleTxt, title.length > 30 ? styles.titleTxtLong : null]}>
              {title}
            </Text>

            <View style={styles.detailsLine}>
              <Text style={styles.detailsTxt}>{dateConversor(release_date)}</Text>
              <Text style={styles.detailsTxt}>{runtime}min</Text>
              <View style={styles.stars}>
                <Text style={styles.detailsTxt}>{vote_average}</Text>
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
