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

import Style from './style/ThemeSelectionStyle'

export default class ThemeSelection extends Component {
  static navigationOptions = {
    title: 'Seleção de tema',
  };

  constructor(props) {
    super(props);

    this.spinValue = new Animated.Value(0);
  }

  componentDidMount () {
    // this.spin()
  }

  spin () {
    this.spinValue.setValue(0)
    Animated.timing(this.spinValue ,{
      toValue: 2,
      duration: 2000,
      easing: Easing.linear,
    }).start();
  }

  render() {
    let spin = this.spinValue.interpolate({
      inputRange: [0, Math.random() * (.8 - .5) + .5],
      outputRange: ['0deg', '480deg']
    })
    return (
      <View style={Style.container}>
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
      <TouchableOpacity style={Style.pickingButton} onPress={() => this.spin()}>
        <Text style={{fontSize: 36}}>Escolher tema</Text>
      </TouchableOpacity>
      </View>
    )
  }
}
