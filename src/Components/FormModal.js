import React, {useState} from 'react';
import {View, Modal, Keyboard, StyleSheet} from 'react-native';
import Common from '@Common';

export default function FormModal(props) {
  const [keyboardSpace, changeKeyBoard] = useState(0);
  //for get keyboard height
  Keyboard.addListener('keyboardDidShow', (frames) => {
    if (!frames.endCoordinates) return;
    changeKeyBoard(frames.endCoordinates.height);
  });
  Keyboard.addListener('keyboardDidHide', (frames) => {
    changeKeyBoard(0);
  });

  const {modalVisible, children} = props;
  return (
    <Modal
      transparent
      visible={modalVisible}
      onRequestClose={() => {}}
      animationType="fade">
      <View style={styles.modalView}>
        <View
          style={{
            ...styles.childrenWrapper,
            bottom: keyboardSpace && Common.isIosDevice ? keyboardSpace + 5 : 0,
          }}>
          {children}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    position: 'absolute',
    backgroundColor: '#000000af',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  childrenWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
  },
});