import {
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  SET_DATE,
  SHOW_UPDATE_NOTE,
} from "../constants";
import * as actions from "./index";

describe("actions", () => {
  it("should create an action to add a note", () => {
    const data = {};
    const expectedAction = {
      type: ADD_NOTE,
      payload: data,
    };
    expect(actions.addNote(data)).toEqual(expectedAction);
  });

  it("should create an action to update a note", () => {
    const data = {};
    const expectedAction = {
      type: UPDATE_NOTE,
      payload: data,
    };
    expect(actions.updateNote(data)).toEqual(expectedAction);
  });

  it("should create an action to delete a note", () => {
    const tileKey = 1;
    const expectedAction = {
      type: DELETE_NOTE,
      payload: tileKey,
    };
    expect(actions.deleteNote(tileKey)).toEqual(expectedAction);
  });

  it("should create an action to change date", () => {
    const nextDate = new Date().getDate();
    const expectedAction = {
      type: SET_DATE,
      payload: nextDate,
    };
    expect(actions.changeDate(nextDate)).toEqual(expectedAction);
  });

  it("should create an action to set date", () => {
    const date = new Date().getDate();
    const expectedAction = {
      type: SET_DATE,
      payload: date,
    };
    expect(actions.setDate(date)).toEqual(expectedAction);
  });

  it("should create an action to show update note", () => {
    const tileKey = 1;
    const expectedAction = {
      type: SHOW_UPDATE_NOTE,
      payload: tileKey,
    };
    expect(actions.showUpdateNote(tileKey)).toEqual(expectedAction);
  });
});
