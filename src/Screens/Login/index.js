import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import Loader from '@Components/Loader';
import styles from './styles';
import Common from '@Common';
import {USER_LIST} from './LoginData';
import AsyncStorage from '@react-native-community/async-storage';

const Helper = new Common.Helper();

const initialState = {
  email: '',
  password: '',
  isInnerLoading: false,
};

function Login(props) {
  const [state, onStateChange] = useState(initialState);

  const {isInnerLoading, email, password} = state;

  // handle change request of the input field
  const handleChange = (text, name) => {
    onStateChange({...state, [name]: text});
  };

  // onSubmitLogin will check the user is available or not
  // if available will navigate to home page
  // if not available will show error
  const onSubmitLogin = () => {
    if (email && password) {
      handleChange(true, 'isInnerLoading');
      let user = USER_LIST.find(
        (item) => item.email === email && item.password === password,
      );
      if (user) {
        setTimeout(() => {
          handleChange(false, 'isInnerLoading');
          AsyncStorage.setItem('authData', JSON.stringify(user));
          Helper.resetNavigation(props, 'Home');
        }, 1000);
      }
      if (!user) {
        setTimeout(() => {
          handleChange(false, 'isInnerLoading');
          Helper.showAlert('No matching credentials found');
        }, 1000);
      }
    } else {
      Helper.showAlert('Emil and Password are required');
    }
  };

  return (
    <Loader isInnerLoading={isInnerLoading}>
      <View style={styles.containers}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidView}
          behavior={Common.isIosDevice ? 'padding' : 'height'}>
          <View style={styles.inputWrapper}>
            <Text style={styles.lebel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter email"
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => handleChange(text, 'email')}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.lebel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter password"
              autoCapitalize="none"
              value={password}
              onChangeText={(text) => handleChange(text, 'password')}
            />
          </View>
          <TouchableOpacity
            onPress={onSubmitLogin}
            style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Login Here</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </Loader>
  );
}

export default Login;
