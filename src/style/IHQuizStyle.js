import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  titleImage: {
    width: responsiveWidth(15),
    height: responsiveHeight(10),
    paddingLeft: 10,
  },
  titleText: {
    fontSize: responsiveFontSize(7),
    fontWeight: '500',
    paddingLeft: 15,
  },
  buttonView: {
    flex: 6,
  },
})

export default Style
