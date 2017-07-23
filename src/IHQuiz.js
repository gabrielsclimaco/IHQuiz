import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Style from './style/IHQuizStyle'

export default class IHQuiz extends Component {
  constructor(props) {
    super(props);
  }

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
          <TouchableOpacity
            style={Style.button}
            onPress={() => {Alert.alert('battle')}}
          >
            <Image
              source={require('../static/assets/sword-battle.png')}
              style={Style.buttonImage}
            />
            <Text style={Style.buttonTitle}>Batalhar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Style.button}
            onPress={() => {Alert.alert('train')}}
          >
            <Image
              source={require('../static/assets/sword.png')}
              style={Style.buttonImage}
            />
          <Text style={Style.buttonTitle} >Treinar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('IHQuiz', () => IHQuiz);
