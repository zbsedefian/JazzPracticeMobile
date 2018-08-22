import { CIRCLE_VIEW_UPDATED } from "./types";

export const circleViewUpdated = ({ prop, value }) => {
  return {
    type: CIRCLE_VIEW_UPDATED,
    payload: { prop, value }
  };
};
