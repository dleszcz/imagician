import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from './../screens/HomeScreen';
import { ImageScreen } from './../screens/ImageScreen';

export default createStackNavigator({
  Home: HomeScreen,
  Image: ImageScreen
});