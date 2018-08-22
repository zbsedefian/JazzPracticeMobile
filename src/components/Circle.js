import React from "react";
import { Dimensions, View, Text, StyleSheet } from "react-native";

const Circle = ({ large, text }) => {
  const { largeCircleStyle, circleStyle, largeTextStyle, textStyle } = styles;
  return (
    <View style={large ? largeCircleStyle : circleStyle}>
      <Text style={large ? largeTextStyle : textStyle}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circleStyle: {
    width: Dimensions.get("window").width / 4,
    height: Dimensions.get("window").width / 4,
    backgroundColor: "aliceblue",
    borderWidth: 2,
    borderRadius: Dimensions.get("window").width / 8,
    borderColor: "#000",
    borderStyle: "solid",
    justifyContent: "center",
    marginRight: 4
  },
  textStyle: {
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 1,
    textShadowColor: "#bbb",
    textAlign: "center",
    fontSize: 24
  },
  largeCircleStyle: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").width / 2,
    backgroundColor: "aliceblue",
    borderWidth: 2,
    borderRadius: Dimensions.get("window").width / 4,
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
