import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
} from 'react-native';

import Style from './style/IHQuizStyle'

export default class IHQuiz extends Component {
  render() {
    return (
      <View style={Style.container}>
        <View style={Style.title}>
          <Image
            source={require('../static/assets/idea.png')}
            style={Style.titleImage}
          />
          <Text style={Style.titleText}>IHQuiz</Text>
        </View>
        <View style={Style.buttonView}>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('IHQuiz', () => IHQuiz);
