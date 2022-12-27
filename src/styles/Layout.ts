import {Dimensions} from 'react-native';

const heightMobileUI: number = 896;
const widthMobileUI: number = 414;

export const Width = (width: number): number => {
  return (Dimensions.get('window').width * width) / widthMobileUI;
};

export const Height = (height: number): number => {
  return (Dimensions.get('window').height * height) / heightMobileUI;
};
