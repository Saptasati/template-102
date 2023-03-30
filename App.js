import  React,{Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserScreen from './screens/UserScreen';
import DonorScreen from './screens/DonorScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/Login';

export default class App extends Component {
  render() {
    return(
      <LoginScreen/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
