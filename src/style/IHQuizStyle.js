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
    width: responsiveWidth(24),
    height: responsiveHeight(15),
    paddingLeft: 10,
  },
  titleText: {
    fontSize: responsiveFontSize(7),
    fontWeight: '500',
    paddingLeft: 15,
  },
  buttonView: {
    flex: 6,
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#fafafa',
    borderColor: '#384684',
    borderWidth: 2,
    padding: 20,
    width: responsiveWidth(70),
  },
  buttonImage: {
    height: responsiveHeight(9),
    width: responsiveWidth(16),
  },
  buttonTitle: {
    fontSize: responsiveFontSize(4),
    fontWeight: '500',
  }
})

export default Style
