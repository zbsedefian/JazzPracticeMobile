import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Sound from "react-native-sound";
import CircleView from "./CircleView";
import Settings from "./Settings";
import { Button } from "./common";
import { circleViewUpdated } from "../actions";
import {
  musicalKeys,
  voicings,
  fingerPatterns,
  stringNumbers
} from "../data/arrays";

class Body extends Component {
  state = {
    showModal: false,
    isRunning: false,
    intervalId: null
  };

  updateCircleData() {
    const { circleViewUpdated } = this.props;
    circleViewUpdated({
      prop: "musicalKey",
      value: musicalKeys[this.getRandom(12)]
    });
    circleViewUpdated({
      prop: "voicing",
      value: voicings[this.getRandom(5)]
    });
    circleViewUpdated({
      prop: "fingerPattern",
      value: fingerPatterns[this.getRandom(3)]
    });
    circleViewUpdated({
      prop: "stringNumber",
      value: stringNumbers[this.getRandom(6)]
    });
  }

  getRandom = max => Math.floor(Math.random() * max);

  updateView() {
    const { timeInterval, musicalKey, playKey, playMetronome } = this.props;

    const intervalId = setInterval(() => {
      if (this.state.isRunning) {
        console.log(timeInterval);

        if (playKey)
          this.playSound(`${musicalKey.toLocaleLowerCase()}_sound.wav`);
        else if (playMetronome) this.playSound("click_sound.wav");

        this.updateCircleData();
      }
    }, timeInterval);

    this.setState({ intervalId });
  }

  playSound(soundPath) {
    setTimeout(() => {
      let currentSound = new Sound(soundPath, Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log("Failed to load sound", error);
          return;
        }
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

  componentDidMount() {
    Sound.setCategory("Playback");
    this.updateView();
  }

  componentDidUpdate(prevProps) {
    if (this.props.timeInterval !== prevProps.timeInterval) {
      clearInterval(this.state.intervalId);
      this.updateView();
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { showModal, isRunning } = this.state;

    return (
      <View style={styles.mainStyle}>
        <CircleView />

        <View style={styles.buttonViewStyle}>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkgray"
  },
  buttonViewStyle: {
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    flexDirection: "row",
    borderColor: "#ddd",
    width: "100%",
    height: 50,
    bottom: 0
  }
});

const mapStateToProps = state => {
  const { timeInterval, playMetronome, playKey, delayPlayKey } = state.settings;
  const { musicalKey } = state.circleData;
  return {
    timeInterval,
    playMetronome,
    playKey,
    delayPlayKey,
    musicalKey
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ circleViewUpdated }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);
