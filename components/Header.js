import React from "react";
import { View, StyleSheet, Platform, Text, Image } from 'react-native';

export default class Header extends React.Component {
    render () {
        return (
      <View style={styles.headerTotal}>
      <View style={styles.header}>
      <Text style={styles.headerText}>Guess My Number</Text>
      </View>
        <Image style={styles.img} source={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2Y2gmQB5zuaBd1AfN_AyEgoTgxPF65i7GwlvrbnnP_RUlubieG19WFnonCtS4ZfAox4&usqp=CAU"} alt="Logo React.js"></Image>
      </View>
    );
    }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3CA18D',
    padding: 20,
    marginBottom: 20,
    width: 301,
    paddingTop: Platform.OS == "ios" ? 40 : 16
  },
  headerText: {
    color: 'white',
    fontSize: 20
  },
  img: {
    width: 95,
    marginBottom: 30
  },
  headerTotal: {
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center'
  }
})