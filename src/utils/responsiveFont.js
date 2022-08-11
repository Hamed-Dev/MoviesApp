// Package import
import {Platform, PixelRatio} from 'react-native';
import {wp} from './dimensions';

const scale = wp(100) / 320;

export default fontSize => {
  const newSize = scale * fontSize;
  if (Platform.OS === 'android') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) ;
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
};
