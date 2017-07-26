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
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
    }).start();
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, Math.random() * (.8 - .5) + .5],
      outputRange: ['0deg', '480deg']
    })
    return (
      <View style={Style.container}>
        <Animated.Image
          style={{
            width: 227,
            height: 227,
            marginBottom: 15,
            transform: [{rotate: spin}],
          }}
            source={{uri: 'https://classconnection.s3.amazonaws.com/930/flashcards/2613930/gif/colourwheel01-144386D03C44B8716C4.gif'}}
        />
      <TouchableOpacity style={Style.pickingButton} onPress={() => this.spin()}>
        <Text style={{fontSize: 36}}>Escolher tema</Text>
      </TouchableOpacity>
      </View>
    )
  }
}
