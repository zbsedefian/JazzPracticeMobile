import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Platform, StyleSheet, Text, View } from "react-native";
import reducers from "./src/reducers";
import { Header } from "./src/components/common";
import Body from "./src/components/Body";

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Header headerText={"Jazz Practice"} />
          <Body />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkgray"
  }
});
