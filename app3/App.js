import React, { Component } from 'react';
import { Text, View } from 'react-native';

class MeuComponente extends Component {
  render() {
    return (
      <View>
        <Text>Primeiro Parametro</Text>
        <Text>Segundo Parametro</Text>
      </View>
    );
  }
}

export default class HelloWorldApp extends Component {
  render() {
    return <MeuComponente></MeuComponente>;
  }
}
