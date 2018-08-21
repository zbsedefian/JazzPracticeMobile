import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Circle extends Component {
  state = { text: "", large: false };
  render() {
    return (
      <View
        style={this.props.large ? styles.largeCircleStyle : styles.circleStyle}
      >
        <Text
          style={this.props.large ? styles.largeTextStyle : styles.textStyle}
        >
          {this.props.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleStyle: {
    width: 100,
    height: 100,
    backgroundColor: "aliceblue",
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "#000",
    borderStyle: "solid",
    justifyContent: "center"
  },
  textStyle: {
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 1,
    textShadowColor: "#bbb",
    textAlign: "center",
    fontSize: 24
  },
  largeCircleStyle: {
    width: 200,
    height: 200,
    backgroundColor: "aliceblue",
    borderWidth: 2,
    borderRadius: 100,
    borderColor: "#000",
    borderStyle: "solid",
    justifyContent: "center"
  },
  largeTextStyle: {
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 1,
    textShadowColor: "#bbb",
    textAlign: "center",
    fontSize: 60
  }
});

export default Circle;
