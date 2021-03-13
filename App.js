import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      input: "",
    };
    this.enviar = this.enviar.bind(this);
  }
  enviar() {
    if (this.state.input === "") {
      alert("Digite seu nome");
      return;
    }
    this.setState({ nome: "Bem vindo: " + this.state.input });
  }

  render() {
    return (
      <View style={estilos.principal}>
        <TextInput
          style={estilos.input}
          underlineColorAndroid="transparent"
          placeholder="Digite seu nome"
          value={this.state.input}
          onChangeText={(nome) => {
            this.setState({ input:nome });
          }}
        />
        <Button type="button" onPress={this.enviar} title="Enviar" />
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
    borderColor: "#222",
    fontSize: 50,
    color: "gray",
  },
  texto: {
    textAlign: "center",
    fontSize: 20,
  },
});
