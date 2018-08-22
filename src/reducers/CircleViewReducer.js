import { CIRCLE_VIEW_UPDATED } from "../actions/types";

const INITIAL_STATE = {
  musicalKey: "C",
  voicing: "maj7",
  fingerPattern: "2-1-1",
  stringNumber: "6"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CIRCLE_VIEW_UPDATED:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
