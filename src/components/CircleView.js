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

    const { mainStyle, largeCircleViewStyle, circlesViewStyle } = styles;

    return (
      <View style={mainStyle}>
        <View style={largeCircleViewStyle}>
          <Circle large text={musicalKey} />
        </View>

        <View style={circlesViewStyle}>
          {showVoicing ? <Circle text={voicing} /> : null}
          {showFingerPattern ? <Circle text={fingerPattern} /> : null}
          {showStringNumber ? <Circle text={stringNumber} /> : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainStyle: {
    alignItems: "center"
  },
  largeCircleViewStyle: {
    marginTop: 50
  },
  circlesViewStyle: {
    marginTop: 5,
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "relative"
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
