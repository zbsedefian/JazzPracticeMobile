import { SETTINGS_CHANGED } from "./types";

export const settingsUpdate = ({ prop, value }) => {
  return {
    type: SETTINGS_CHANGED,
    payload: { prop, value }
  };
};
