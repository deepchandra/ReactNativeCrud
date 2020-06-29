import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Header, Body, Title, Icon} from 'native-base';
import Common from '@Common';
import AsyncStorage from '@react-native-community/async-storage';

const Helper = new Common.Helper();

function SideMenu(props) {
  const {onClose} = props;

  // handle the events of the menu item of the side bar
  async function onClickMenu(name) {
    if (name == 'home') {
      onClose();
    }
    if (name == 'logout') {
      onClose();
      await AsyncStorage.removeItem('authData');
      Helper.resetNavigation(props, 'Login');
    }
  }

  return (
    <View style={styles.drawerContainer}>
      <Header style={styles.header}>
        <Body>
          <Title style={styles.headerText}>Aviox Test</Title>
        </Body>
      </Header>
      <View style={styles.bodyWrapper}>
        <TouchableOpacity
          style={styles.listItemWrapper}
          onPress={() => onClickMenu('home')}>
          <Icon name="home" type="AntDesign" style={styles.icon} />
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listItemWrapper}
          onPress={() => onClickMenu('logout')}>
          <Icon name="logout" type="AntDesign" style={styles.icon} />
          <Text style={styles.text}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SideMenu;
