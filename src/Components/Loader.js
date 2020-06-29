import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import Common from '@Common';

const Loader = ({children, isLoading, isInnerLoading}) => {
  if (isLoading)
    return (
      <View style={STYLES.container}>
        <ActivityIndicator style={STYLES.loader} size="large" />
      </View>
    );
  else
    return (
      <View
        style={STYLES.opacityLoaderContainer}
        pointerEvents={isInnerLoading ? 'none' : 'box-none'}
        opacity={isInnerLoading ? 0.5 : 1}>
        {isInnerLoading && (
          <ActivityIndicator style={STYLES.innderLoader} size="large" />
        )}
        {children}
      </View>
    );
};

const STYLES = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Common.whiteColor,
    justifyContent: 'center',
  },
  loader: {
    color: Common.appColor,
  },
  opacityLoaderContainer: {
    width: '100%',
    height: '100%',
  },
  innderLoader: {
    color: Common.appColor,
    position: 'absolute',
    alignSelf: 'center',
    height: '100%',
  },
});

export default Loader;
