import React, {useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Login';
import Home from './Home';
import Common from '@Common';
import AsyncStorage from '@react-native-community/async-storage';

const Helper = new Common.Helper();

function Splash(props) {
  useEffect(() => {
    AsyncStorage.getItem('authData').then((value) => {
      if (value) {
        Helper.resetNavigation(props, 'Home');
      } else {
        Helper.resetNavigation(props, 'Login');
      }
    });
  }, []);
  return (
    <View style={STYLES.container}>
      <ActivityIndicator color={Common.appColor} size="large" />
    </View>
  );
}

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
    },
    Login: {
      screen: Login,
    },
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'Splash',
    swipeEnabled: false,
    headerMode: 'none',
  },
);
export default createAppContainer(AppNavigator);

const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
