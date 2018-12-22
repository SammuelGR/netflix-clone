import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Genres = (props) => {
  const { genres } = props;

  const result = genres.map(item => (
    <Text key={item.id} style={styles.genreTxt}>
      {item.name}
    </Text>
  ));

  return <View style={styles.container}>{result}</View>;
};

export default Genres;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  genreTxt: {
    color: '#ebebeb',
  },
});
