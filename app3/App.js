import React, { Component } from 'react';
import { Text, View } from 'react-native';

class MeuComponente extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.prop1}</Text>
        <Text>{this.props.prop2}</Text>
      </View>
    );
  }
}

export default class HelloWorldApp extends Component {
  render() {
    return <MeuComponente prop1='Banana' prop2='Abacaxi'></MeuComponente>;
  }
}
