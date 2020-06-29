import React from 'react';
import {Header, Left, Body, Right, Title, Icon} from 'native-base';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Common from '@Common';

export default function HeaderCompo({
  icon = 'arrow-back',
  iconType = 'MaterialIcons',
  onClickLeftIcon = () => {},
}) {
  return (
    <Header style={STYLES.header}>
      <Left>
        <TouchableOpacity onPress={() => onClickLeftIcon()}>
          <Icon style={STYLES.textIcon} name={icon} type={iconType} />
        </TouchableOpacity>
      </Left>
      <Body>
        <Title style={STYLES.textIcon}>Aviox Test</Title>
      </Body>
      <Right />
    </Header>
  );
}

const STYLES = StyleSheet.create({
  header: {
    backgroundColor: Common.appColor,
  },
  textIcon: {
    color: Common.whiteColor,
  },
});
