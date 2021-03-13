import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
    };
    this.texto = this.texto.bind(this);
  }

  texto(nome) {
    if (nome.length > 0) {
      this.setState({ nome: "Bem vindo " + nome });
    } else {
      this.setState({ nome: "" });
    }
  }

  render() {
    return (
      <View style={estilos.principal}>
        <TextInput
          style={estilos.input}
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
          onChangeText={this.texto}
        />
        <Text style={estilos.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: "#FFFAFA",
  },
  input: {
    height: 50,
    padding: 30,
    margin: 30,
    borderWidth: 1,
    borderColor: '#222',
    fontSize: 50,
    color:'#000000',
    
  },
  texto: {
    textAlign: "center",
    fontSize: 20,
  },
});
