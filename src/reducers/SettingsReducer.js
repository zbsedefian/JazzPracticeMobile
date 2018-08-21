import { SETTINGS_CHANGED } from "../actions/types";

const INITIAL_STATE = {
  timeInterval: 2000,
  playMetronome: false,
  playKey: false,
  delayPlayKey: false,
  showVoicing: true,
  showFingerPattern: true,
  showStringNumber: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SETTINGS_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
