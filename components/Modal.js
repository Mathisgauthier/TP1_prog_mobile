import React from "react";
import Alert from "react-native"
import GuessMyNumber from "./GuessMyNumber"

export default class Modal extends React.Component {
  componentDidMount() {
    alert(this.props.message);
  }

  render() {
    return <></>;
  }
}