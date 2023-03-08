import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert} from 'react-native';

export default class GuessMyNumber extends React.Component {
  state= {
    numberGuess: 0,
    numberRandom: Math.floor(Math.random() * 21),
  };

  effacer = () => {
    this.setState({ numberGuess: "" });
  };



valider = () => {
  const numberGuess = this.state.numberGuess;
  const numberRandom = this.state.numberRandom;
    if(numberGuess < numberRandom){
      Alert.alert("Le chiffre que vous avez saisi est inférieur au chiffre magique.Veuillez réessayer!", [
        {
          text: "D'accord",
        },
      ]);
      return;
    }else if(numberGuess > numberRandom){
      Alert.alert("Le chiffre que vous avez saisi est supérieur au chiffre magique.Veuillez réessayer!", [
        {
          text: "D'accord",
        },
      ]);
      return;
    }else if(Onpress >= 3){
      Alert.alert("Vous avez atteint trois tentatives erronées!Le chiffre était" + numberRandom);
      return;
    }
    else{
      Alert.alert("Bravo, vous avez trouvé le chiffre magique!", [
        {
          text: "D'accord",
        },
      ]);
      return;

    }
  };



  chiffreMagique = () => {
    return (
    <View style={styles.structure}>
    <Text style={styles.title}>Devinez le chiffre magique</Text>
      <TextInput
        placeholder="Entrez un chiffre magique"
          style={styles.input}
          value={this.state.numberGuess}
          onChangeText={(text) => {
            this.setState({ numberGuess: text });
          }}
      />
    </View>
    );
  };


  buttonResultat = () => {
    return (
      <View>
      <View style={styles.btnStyle}>
      <TouchableOpacity
          style={styles.valider}
          onPress={this.valider}>
          <Text style={styles.btnText1}>Valider </Text>
        </TouchableOpacity>
      <TouchableOpacity
          style={styles.effacer}
          onPress={this.effacer}>
          <Text style={styles.btnText2}>Effacer</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
  };

render() {
    return (
      <>
        {this.chiffreMagique()}
        {this.buttonResultat()}
      </>
    );
  }
}




const styles = StyleSheet.create({
  structure: {
    textAlign: "center"
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  input: {
    border: "solid black",
    textAlign: "center",
    padding: 12,
    margin: 20,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 10,
  },
  btnStyle: {
    marginLeft: 40,
    marginRight: 40,
  },
  btnText1: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  btnText2: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  valider: {
    backgroundColor: "#3CA18D",
    marginVertical: 4,
    padding: 12,
    borderRadius: 10,
    marginBottom: 18,
  },
  effacer: {
    backgroundColor: "#FFE692",
    marginVertical: 4,
    padding: 12,
    borderRadius: 10,
  }
})