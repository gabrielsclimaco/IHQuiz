import { AppRegistry } from 'react-native';

import Home from './Home';
import ThemeSelection from './ThemeSelection';

import { StackNavigator } from 'react-navigation';

const IHQuiz = StackNavigator({
  Home: { screen: Home },
  ThemeSelection: { screen: ThemeSelection }
})

AppRegistry.registerComponent('IHQuiz', () => IHQuiz);
