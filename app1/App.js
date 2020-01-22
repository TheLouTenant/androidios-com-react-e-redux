import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    const estilo = {
      HelloWorldApp: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    };

    return (
      <View style={estilo.HelloWorldApp}>
        <Text>Hello, React World!</Text>
      </View>
    );
  }
}
