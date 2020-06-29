import {StyleSheet} from 'react-native';
import Common from '@Common';

export default StyleSheet.create({
  drawerContainer: {
    backgroundColor: Common.greyThemeColor,
    flex: 1,
  },
  welcomeText: {
    color: Common.whiteColor,
    fontSize: Common.fontMedium,
  },
  listItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    color: Common.whiteColor,
    fontSize: Common.fontLarge,
  },
  text: {
    color: Common.whiteColor,
    fontSize: Common.fontMedium,
    marginLeft: 20,
  },
  bodyWrapper: {
    padding: 20,
  },
  header: {
    backgroundColor: Common.appColor,
  },
  headerText: {
    color: Common.whiteColor,
  },
});
