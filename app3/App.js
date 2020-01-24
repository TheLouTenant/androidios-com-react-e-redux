import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const estilo = StyleSheet.create({
  HelloWorldApp: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {color: '#fff', backgroundColor: 'red'},
});

export default class HelloWorldApp extends Component {
  render() {
    const {HelloWorldApp, text} = estilo;x
    return (
      <View style={estilo.HelloWorldApp}>
        <Text style={estilo.text}>Hello, React World!</Text>
      </View>
    );
  }
}
