import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    const estilo = {
      HelloWorldApp: {flex: 1, justifyContent: 'center', alignItems: 'center'},
      text: {color: '#fff', backgroundColor: 'red'}
    };

    return (
      <View style={estilo.HelloWorldApp}>
        <Text style={estilo.text}>Hello, React World!</Text>
      </View>
    );
  }
}
