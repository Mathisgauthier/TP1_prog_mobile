import React from "react";
import Header from "./components/Header"
import GuessMyNumber from "./components/GuessMyNumber";
import Regles from "./components/Regles"
import Modal from "./components/Modal"

export default class App extends React.Component {
  render () {
    return (
      <>
      <Header/>
      <GuessMyNumber />
      <Regles />
      <Modal />
      </>
    )
  }
}
