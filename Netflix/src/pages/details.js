import React from 'react';
import { Text, View } from 'react-native';

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
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details page</Text>
      </View>
    );
  }
}
