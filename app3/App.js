import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class MeuComponente extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.prop1}</Text>
        <Text>{this.props.prop2}</Text>
        <Text>{this.props.prop3}</Text>
      </View>
    );
  }
}

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);

    this.state = {prop3: 'Texto de teste'};
  }

  alteraTexto() {
    this.setState({prop3: 'Novo texto'});
  }

  render() {
    return (
      <View>
        <MeuComponente
          prop1="Banana"
          prop2="Abacaxi"
          prop3={this.state.prop3}></MeuComponente>
        <Button
          title="Botão"
          onPress={() => {
            this.alteraTexto();
          }}></Button>
      </View>
    );
  }
}
