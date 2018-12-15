import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './pages/home';

const AppNavigator = createStackNavigator(
  {
    Home,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#9b0000',
      },
      headerTintColor: '#FFF',
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
