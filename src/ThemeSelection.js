import React, { Component } from 'react';
import {
  View,
  Animated,
  Image,
  Easing,
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
    this.spin()
  }
  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 2,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '720deg']
    })
    return (
      <View style={Style.container}>
        <Animated.Image
          style={{
            width: 227,
            height: 200,
            transform: [{rotate: spin}] }}
            source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/al'+
              'exanderfarennikov/images/1198519/reactjs.png'}}
        />
      </View>
    )
  }
}
