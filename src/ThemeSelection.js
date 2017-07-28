import React, { Component } from 'react';
import {
  View,
  Animated,
  Image,
  Easing,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';

import Style from './style/ThemeSelectionStyle';
import FadeInView from './components/FadeInView';

export default class ThemeSelection extends Component {
  static navigationOptions = {
    title: 'Seleção de tema',
  };

  constructor(props) {
    super(props);

    this.spinValue = new Animated.Value(0);
  }

  spin (spin) {
    this.spinValue.setValue(0)
    Animated.timing(this.spinValue ,{
      toValue: 1,
      duration: 2400,
      easing: Easing.elastic(.9),
    }).start(() => console.log('ALTOS SPINZAO BIXO', this.spinValue));
  }

  render() {
    let spin = this.spinValue.interpolate({
      // inputRange: [0, Math.random() * (.8 - .5) + .5],
      inputRange: [0, .58],
      outputRange: ['0deg', '480deg']
    })
    return (
      <View style={Style.container}>
        <FadeInView
          duration={500}
          style={{alignItems: 'center',}}
        >
          <Image
            style={Style.themeIndicator}
            source={require('../static/assets/drop-down-arrow.png')}
            />
          <Animated.Image
            style={{
              width: 300,
              height: 300,
              marginBottom: 15,
              transform: [{rotate: spin}],
            }}
            source={require('../static/assets/complete-spinning-wheel.png')}
            />
        </FadeInView>
        <FadeInView duration={1000}>
          <TouchableOpacity style={Style.pickingButton} onPress={() => this.spin(spin)}>
            <Text style={{fontSize: 36}}>Escolher tema</Text>
          </TouchableOpacity>
        </FadeInView>
      </View>
    )
  }
}
