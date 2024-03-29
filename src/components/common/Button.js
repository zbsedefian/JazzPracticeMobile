import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  textStyle: {
    alignSelf: "center",
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  }
};

export { Button };
