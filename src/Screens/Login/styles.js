import {StyleSheet} from 'react-native';
import Common from '@Common';

export default StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: Common.whiteColor,
  },
  keyboardAvoidView: {
    flex: 1,
    justifyContent: 'center',
  },
  inputWrapper: {
    alignSelf: 'center',
    width: '85%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    paddingHorizontal: 5,
    width: '100%',
    borderRadius: 5,
    borderColor: Common.appColor,
    borderWidth: 1,
  },
  lebel: {
    color: Common.appColor,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 5,
  },
  buttonContainer: {
    width: '85%',
    backgroundColor: Common.appColor,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: Common.whiteColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
