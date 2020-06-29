import {StackActions, NavigationActions} from 'react-navigation';
import {Alert} from 'react-native';

export default class CommonHelper {
  goBack = (props, source) => {
    props.navigation.goBack(source);
  };

  resetNavigation = (props, navigation, payload) => {
    props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: navigation,
            params: payload,
          }),
        ],
      }),
    );
  };

  navigateTo = (props, navigation, parameter) => {
    props.navigation.navigate(navigation, parameter);
  };

  showAlert = (message) => {
    Alert.alert(
      '',
      message || 'No Message',
      [{text: 'OK', onPress: () => {}}],
      {cancelable: false},
    );
  };
}
