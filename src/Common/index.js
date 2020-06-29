import {Dimensions, Platform} from 'react-native';
import Helper from "./helper";
import commonStyle from "./commonStyle";

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const isIosDevice = Platform.OS === 'ios';

module.exports = {
  // Device height and width
  deviceHeight,
  deviceWidth,
  isIosDevice,

  // Color and backgroundColor
  grayTextBackground: 'rgba(187, 178, 178, 0.2)',
  warningColor: '#ff9800',
  appColor: '#e91e63',
  placeHolderGray: '#787878',
  whiteColor: '#ffffff',
  greyThemeColor: '#424c58',
  lightBlue: "#5f99ff",

  // Font sizes
  fontSmall: 12,
  fontNormal: 13,
  fontMedium: 16,
  fontLarge: 18,
  fontXL: 20,
  fontXXL: 22,

  // helper methods and common style files
  Helper,
  commonStyle,
};
