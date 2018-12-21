import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Section from '../components/section';

import Logo from '../components/logo';

class Home extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo />,
    headerStyle: {
      backgroundColor: '#1b1b1b',
    },
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Section genre="Genero 1" navigation={this.props.navigation} />
        <Section genre="Genero 2" navigation={this.props.navigation} />
        <Section genre="Genero 3" navigation={this.props.navigation} />
        <Section genre="Genero 4" navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
