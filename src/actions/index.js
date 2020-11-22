import {
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  SET_DATE,
  SHOW_UPDATE_NOTE,
} from "../constants";

export const addNote = (data) => {
  return {
    type: ADD_NOTE,
    payload: data,
  };
};

export const updateNote = (data) => {
  return {
    type: UPDATE_NOTE,
    payload: data,
  };
};

export const deleteNote = (tileKey) => {
  return {
    type: DELETE_NOTE,
    payload: tileKey,
  };
};

export const changeDate = (nextDate) => {
  return {
    type: SET_DATE,
    payload: nextDate,
  };
};

export const setDate = (date) => {
  return {
    type: SET_DATE,
    payload: date,
  };
};

export const showUpdateNote = (tileKey) => {
  return {
    type: SHOW_UPDATE_NOTE,
    payload: tileKey,
  };
};
