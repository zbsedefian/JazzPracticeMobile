import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";
import Circle from "./Circle";

class CircleView extends Component {
  state = {};

  render() {
    const {
      showVoicing,
      showFingerPattern,
      showStringNumber,
      musicalKey,
      voicing,
      fingerPattern,
      stringNumber
    } = this.props;

    const { mainStyle, voicingStyle, fingeringStyle, stringStyle } = styles;

    return (
      <View style={mainStyle}>
        <View>
          <Circle large text={musicalKey} />
        </View>

        <View style={voicingStyle}>
          {showVoicing ? <Circle text={voicing} /> : null}
        </View>

        <View style={fingeringStyle}>
          {showFingerPattern ? <Circle text={fingerPattern} /> : null}
        </View>

        <View style={stringStyle}>
          {showStringNumber ? <Circle text={stringNumber} /> : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainStyle: {
    alignItems: "center",
    marginTop: -50
  },
  voicingStyle: {
    position: "absolute",
    left: -20,
    top: -50
  },
  fingeringStyle: {
    position: "absolute",
    right: -20,
    top: -50
  },
  stringStyle: {
    position: "absolute",
    right: -20,
    bottom: -50
  }
});

const mapStateToProps = state => {
  const { showVoicing, showFingerPattern, showStringNumber } = state.settings;
  const { musicalKey, voicing, fingerPattern, stringNumber } = state.circleData;
  return {
    showVoicing,
    showFingerPattern,
    showStringNumber,
    musicalKey,
    voicing,
    fingerPattern,
    stringNumber
  };
};

export default connect(mapStateToProps)(CircleView);
