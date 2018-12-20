import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Logo from './components/logo';

import Home from './pages/home';

const AppNavigator = createStackNavigator(
  {
    Home,
  },
  {
    defaultNavigationOptions: {
      headerTitle: <Logo />,
      headerStyle: {
        backgroundColor: '#1b1b1b',
      },
      headerTintColor: '#FFF',
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
