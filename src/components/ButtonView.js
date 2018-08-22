import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "./common";

class ButtonView extends Component {
  state = {};
  render() {
    return (
      <View style={styles.buttonViewStyle}>
        <Button onPress={() => this.setState({ showModal: !showModal })}>
          Settings
        </Button>
        <Button onPress={() => this.setState({ isRunning: !isRunning })}>
          Start / Stop
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonViewStyle: {
    padding: 30,
    backgroundColor: "darkgray",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd"
  }
});

export default ButtonView;
