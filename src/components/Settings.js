import React, { Component } from "react";
import { Text, View, Modal, Switch, Picker } from "react-native";
import { connect } from "react-redux";
import { Button, CardSection, Input } from "./common";
import { settingsUpdate } from "../actions/";

class Settings extends Component {
  render() {
    const { containerStyle, textStyle, cardSectionStyle } = styles;

    const {
      visible,
      onClose,
      timeInterval,
      playMetronome,
      playKey,
      delayPlayKey,
      showVoicing,
      showFingerPattern,
      showStringNumber
    } = this.props;

    return (
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => {}}
      >
        <View style={containerStyle}>
          <CardSection style={cardSectionStyle}>
            <Text style={textStyle}>Settings</Text>
          </CardSection>

          <CardSection>
            <Text style={styles.labelStyle}>
              Current: {timeInterval / 1000}s
            </Text>
            <Picker
              style={{ flex: 1 }}
              selectedValue={timeInterval}
              onValueChange={value => {
                console.log(value, timeInterval);
                this.props.settingsUpdate({
                  prop: "timeInterval",
                  value: parseInt(value)
                });
              }}
            >
              <Picker.Item label="Choose interval" value="5000" />
              <Picker.Item label="Half second" value="500" />
              <Picker.Item label="1 second" value="1000" />
              <Picker.Item label="1.5 seconds" value="1500" />
              <Picker.Item label="2 seconds" value="2000" />
              <Picker.Item label="3 seconds" value="3000" />
              <Picker.Item label="4 seconds" value="4000" />
              <Picker.Item label="5 seconds" value="5000" />
              <Picker.Item label="6 seconds" value="6000" />
              <Picker.Item label="7 seconds" value="7000" />
              <Picker.Item label="8 seconds" value="8000" />
              <Picker.Item label="9 seconds" value="9000" />
              <Picker.Item label="10 seconds" value="10000" />
              <Picker.Item label="15 seconds" value="15000" />
              <Picker.Item label="30 seconds" value="30000" />
              <Picker.Item label="45 seconds" value="45000" />
              <Picker.Item label="60 seconds" value="60000" />
            </Picker>
            {/* <Input
              label="Time interval (seconds)"
              value={(timeInterval / 1000).toString()}
              onChangeText={value =>
                this.props.settingsUpdate({
                  prop: "timeInterval",
                  value: value * 1000
                })
              }
            /> */}
          </CardSection>

          <CardSection>
            <Text style={styles.labelStyle}>Metronome</Text>
            <Switch
              onValueChange={value =>
                this.props.settingsUpdate({ prop: "playMetronome", value })
              }
              value={playMetronome}
              style={styles.switchStyle}
            />
          </CardSection>

          <CardSection>
            <Text style={styles.labelStyle}>Play key</Text>
            <Switch
              onValueChange={value =>
                this.props.settingsUpdate({ prop: "playKey", value })
              }
              value={playKey}
              style={styles.switchStyle}
            />
          </CardSection>

          <CardSection>
            <Text style={styles.labelStyle}>Delay before key</Text>
            <Switch
              onValueChange={value =>
                this.props.settingsUpdate({ prop: "delayPlayKey", value })
              }
              value={delayPlayKey}
              style={styles.switchStyle}
            />
          </CardSection>

          <CardSection>
            <Text style={styles.labelStyle}>Show voicing</Text>
            <Switch
              onValueChange={value =>
                this.props.settingsUpdate({ prop: "showVoicing", value })
              }
              value={showVoicing}
              style={styles.switchStyle}
            />
          </CardSection>

          <CardSection>
            <Text style={styles.labelStyle}>Show finger pattern</Text>
            <Switch
              onValueChange={value =>
                this.props.settingsUpdate({ prop: "showFingerPattern", value })
              }
              value={showFingerPattern}
              style={styles.switchStyle}
            />
          </CardSection>

          <CardSection>
            <Text style={styles.labelStyle}>Show string number</Text>
            <Switch
              onValueChange={value =>
                this.props.settingsUpdate({ prop: "showStringNumber", value })
              }
              value={showStringNumber}
              style={styles.switchStyle}
            />
          </CardSection>

          <CardSection>
            <Button onPress={onClose}>Close</Button>
          </CardSection>
        </View>
      </Modal>
    );
  }
}

const styles = {
  cardSectionStyle: {
    justifyContent: "center"
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.50)",
    position: "relative",
    flex: 1,
    justifyContent: "center"
  },
  labelStyle: {
    fontSize: 20,
    paddingLeft: 20,
    flex: 1
  },
  switchStyle: {
    marginRight: 20
  }
};

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

export default connect(
  mapStateToProps,
  { settingsUpdate }
)(Settings);
