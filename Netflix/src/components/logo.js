import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => {
  const logoImg = require('../../assets/logo.png');
  return <Image source={logoImg} style={styles.logo} />;
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    height: 110,
    resizeMode: 'contain',
    width: 110,
  },
});
