import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

const Input = ({
  placeholder,
  label,
  value,
  onChangeText,
  secureTextEntry
}) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        keyboardType="number-pad"
        placeholder={placeholder}
        autoCapitalize={"none"}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={styles.inputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 20,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 20,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
});

export { Input };
