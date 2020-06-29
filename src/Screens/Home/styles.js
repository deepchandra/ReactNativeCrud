import {StyleSheet} from 'react-native';
import Common from '@Common';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Common.whiteColor,
  },
  bodyWrapper: {
    flex: 9,
    backgroundColor: Common.whiteColor,
    padding: 10,
  },
  contactCard: {
    marginBottom: 10,
    borderColor: Common.appColor,
    borderRadius: 5,
    overflow: 'hidden',
  },
  addNewBtn: {
    alignSelf: 'flex-end',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  inputWrapper: {
    marginBottom: 10,
  },
  input: {
    height: 45,
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
    backgroundColor: Common.appColor,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  cancelBtn: {
    backgroundColor: Common.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10
  },
  buttonText: {
    color: Common.whiteColor,
    fontSize: 16,
  },
});
