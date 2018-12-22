import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Section from '../components/section';
import Logo from '../components/logo';
import api from '../services/api';

class Home extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo />,
    headerStyle: {
      backgroundColor: '#1b1b1b',
    },
  };

  state = {
    genres: [],
  };

  componentDidMount() {
    this.loadGenres();
  }

  loadGenres = async () => {
    const response = await api.get(
      '/genre/movie/list?api_key=581af4cd9fd9df5711b3b976997435fb&language=pt-BR',
    );

    const { genres } = response.data;

    this.setState({
      genres,
    });
  };

  render() {
    const { genres } = this.state;
    const { navigation } = this.props;

    const Sections = genres.map(item => (
      <Section genre={item.name} genreId={item.id} key={item.id} navigation={navigation} />
    ));

    return <ScrollView style={styles.container}>{Sections}</ScrollView>;
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
