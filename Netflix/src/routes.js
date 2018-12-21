import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Logo from './components/logo';

import Home from './pages/home';
import Details from './pages/details';

const AppNavigator = createStackNavigator({
  Home,
  Details,
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
