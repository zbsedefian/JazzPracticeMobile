import React from "react";
import { Text, View, Modal, Switch, Picker } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, CardSection } from "./common";
import { settingsUpdate } from "../actions/";

const Settings = ({
  visible,
  onClose,
  timeInterval,
  playMetronome,
  playKey,
  delayPlayKey,
  showVoicing,
  showFingerPattern,
  showStringNumber,
  settingsUpdate
}) => {
  const {
    containerStyle,
    textStyle,
    cardSectionStyle,
    labelStyle,
    switchStyle
  } = styles;

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
          <Text style={styles.labelStyle}>Current: {timeInterval / 1000}s</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={timeInterval.toString()}
            onValueChange={value => {
              console.log(value, timeInterval);
              settingsUpdate({
                prop: "timeInterval",
                value: parseInt(value)
              });
            }}
          >
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
        </CardSection>

        <CardSection>
          <Text style={labelStyle}>Play click</Text>
          <Switch
            onValueChange={value =>
              settingsUpdate({ prop: "playMetronome", value })
            }
            value={playMetronome}
            style={switchStyle}
          />
        </CardSection>

        <CardSection>
          <Text style={labelStyle}>Play note</Text>
          <Switch
            onValueChange={value => settingsUpdate({ prop: "playKey", value })}
            value={playKey}
            style={switchStyle}
          />
        </CardSection>

        <CardSection>
          <Text style={labelStyle}>Delay before note</Text>
          <Switch
            onValueChange={value =>
              settingsUpdate({ prop: "delayPlayKey", value })
            }
            value={delayPlayKey}
            style={switchStyle}
            disabled={!playKey}
          />
        </CardSection>

        <CardSection>
          <Text style={labelStyle}>Show voicing</Text>
          <Switch
            onValueChange={value =>
              settingsUpdate({ prop: "showVoicing", value })
            }
            value={showVoicing}
            style={switchStyle}
          />
        </CardSection>

        <CardSection>
          <Text style={labelStyle}>Show finger pattern</Text>
          <Switch
            onValueChange={value =>
              settingsUpdate({ prop: "showFingerPattern", value })
            }
            value={showFingerPattern}
            style={switchStyle}
          />
        </CardSection>

        <CardSection>
          <Text style={labelStyle}>Show string number</Text>
          <Switch
            onValueChange={value =>
              settingsUpdate({ prop: "showStringNumber", value })
            }
            value={showStringNumber}
            style={switchStyle}
          />
        </CardSection>

        <CardSection>
          <Button onPress={onClose}>Close</Button>
        </CardSection>
      </View>
    </Modal>
  );
  // }
};

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ settingsUpdate }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
