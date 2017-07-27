import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  pickingButton: {
    borderWidth: 2,
    marginTop: 15,
    borderRadius: 3,
    padding: 10,
    borderColor: '#384684',
    backgroundColor: '#fafafa',
  },
  themeIndicator: {
    height: responsiveHeight(10),
    width: responsiveWidth(20),
    marginBottom: -30,
    zIndex: 2,
  }
})

export default Style
