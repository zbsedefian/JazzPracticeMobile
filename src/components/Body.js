import React, { Component } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import Sound from "react-native-sound";
import Circle from "./Circle";
import Settings from "./Settings";
import { Button } from "./common";
import {
  musicalKeys,
  voicings,
  fingerPatterns,
  stringNumbers
} from "../data/arrays";

class Body extends Component {
  state = {
    musicalKey: "C",
    voicing: "maj7",
    fingerPattern: "2-1-1",
    stringNumber: "6",
    showModal: false,
    isRunning: false,
    intervalId: null
  };

  componentWillReceiveProps() {
    Sound.setCategory("Playback");

    const intervalId = setInterval(() => {
      if (this.state.isRunning) {
        console.log(this.props.timeInterval);

        if (this.props.playKey) {
          this.playSound(
            `${this.state.musicalKey.toLocaleLowerCase()}_sound.wav`
          );
        } else if (this.props.playMetronome) {
          this.playSound("click_sound.wav");
        }

        this.setState({
          musicalKey: musicalKeys[this.getRandom(12)],
          voicing: voicings[this.getRandom(5)],
          fingerPattern: fingerPatterns[this.getRandom(3)],
          stringNumber: stringNumbers[this.getRandom(6)]
        });
      }
    }, this.props.timeInterval);

    this.setState({ intervalId });
  }

  getRandom = max => Math.floor(Math.random() * max);

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  playSound(soundPath) {
    setTimeout(() => {
      let currentSound = new Sound(soundPath, Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log("Failed to load sound", error);
          return;
        }

        console.log(
          "duration in seconds: " +
            currentSound.getDuration() +
            "number of channels: " +
            currentSound.getNumberOfChannels()
        );

        setTimeout(() => {
          currentSound.play(success => {
            if (success) {
              console.log("Sound played successfully");
            } else {
              console.log("Playback failed due to audio decoding errors");
              currentSound.reset();
            }
          });
        }, 100);
      });
    }, this.props.delayPlayKey ? this.props.timeInterval - 1000 : 100);
  }

  render() {
    const {
      musicalKey,
      voicing,
      fingerPattern,
      stringNumber,
      showModal,
      isRunning
    } = this.state;

    const { showVoicing, showFingerPattern, showStringNumber } = this.props;

    const {
      mainStyle,
      largeCircleViewStyle,
      circlesViewStyle,
      buttonViewStyle
    } = styles;

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

        <View style={buttonViewStyle}>
          <Button onPress={() => this.setState({ showModal: !showModal })}>
            Settings
          </Button>
          <Button onPress={() => this.setState({ isRunning: !isRunning })}>
            Start / Stop
          </Button>
        </View>

        <Settings
          visible={showModal}
          onClose={() => this.setState({ showModal: false })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkgray"
  },
  buttonViewStyle: {
    padding: 30,
    backgroundColor: "darkgray",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd"
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
  const {
    timeInterval,
    playMetronome,
    playKey,
    delayPlayKey,
    showVoicing,
    showFingerPattern,
    showStringNumber
  } = state.settings;
  return {
    timeInterval,
    playMetronome,
    playKey,
    delayPlayKey,
    showVoicing,
    showFingerPattern,
    showStringNumber
  };
};

export default connect(mapStateToProps)(Body);
