import React, { Component } from 'react';
import { Text, View } from 'react-native';

const estilo = {
  HelloWorldApp: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {color: '#fff', backgroundColor: 'red'},
};
export default class HelloWorldApp extends Component {
  render() {
    const {HelloWorldApp, text} = estilo;
    return (
      <View style={HelloWorldApp}>
        <Text style={text}>Hello, React World!</Text>
      </View>
    );
  }
}
