import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Section from '../components/section';

const Home = () => (
  <ScrollView style={styles.container}>
    <Section genre="Genero 1" />
    <Section genre="Genero 2" />
    <Section genre="Genero 3" />
    <Section genre="Genero 4" />
  </ScrollView>
);

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
