import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './pages/home';

const AppNavigator = createStackNavigator(
  {
    Home,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#1b1b1b',
      },
      headerTintColor: '#FFF',
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
