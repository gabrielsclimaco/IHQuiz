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
import DropdownAlert from 'react-native-dropdownalert'

const item = {
  key: 0,
  backgroundColor: '#2B73B6',
  type: 'info',
  title: 'Info',
  message: 'Essa função está sendo implementada.'
};

export default class IHQuiz extends Component {
  constructor(props) {
    super(props);
  }

  showAlert(item) {
    this.dropdown.alertWithType(item.type, item.title, item.message);
  }

  dismissAlert = () => {
    this.dropdown.onClose();
  }

  onClose(data) {
    console.log(data);
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
            onPress={() => this.showAlert(item)}
          >
            <Image
              source={require('../static/assets/sword-battle.png')}
              style={Style.buttonImage}
            />
            <Text style={Style.buttonTitle}>Batalhar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Style.button}
            onPress={() => this.showAlert(item)}
          >
            <Image
              source={require('../static/assets/sword.png')}
              style={Style.buttonImage}
            />
            <Text style={Style.buttonTitle} >Treinar</Text>
          </TouchableOpacity>
        </View>
        <DropdownAlert
          ref={(ref) => this.dropdown = ref}
          containerStyle={{
            backgroundColor: "#2B73B6",
          }}
          onClose={(data) => this.onClose(data)}
          imageSrc={'https://facebook.github.io/react/img/logo_og.png'}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('IHQuiz', () => IHQuiz);
