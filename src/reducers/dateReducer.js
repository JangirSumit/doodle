import { CHANGE_DATE } from "../constants";

const initialState = new Date();

export const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DATE:
      return action.payload;
    default:
      return state;
  }
};
