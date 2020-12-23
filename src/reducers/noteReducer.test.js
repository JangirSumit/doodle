import { formatDate } from "../common";
import { ADD_NOTE, SET_DATE } from "../constants";
import { noteReducer } from "./noteReducer";

const initialState = {
  date: formatDate(new Date()),
  notes: [],
  showUpdateNote: false,
  editTile: {},
};

describe("note reducer", () => {
  it("should return null while calling note reducer with null state and blank action", () => {
    expect(noteReducer(null, "")).toEqual(null);
  });

  it("should return initialState while calling note reducer with blank action", () => {
    expect(noteReducer(initialState, "")).toEqual(initialState);
  });

  it("should return new State while calling note reducer with SET_DATE action", () => {
    const newDate = new Date();
    expect(
      noteReducer(initialState, {
        type: SET_DATE,
        payload: newDate,
      })
    ).toEqual({ ...initialState, date: formatDate(newDate) });
  });

  it("should return new State while calling note reducer with ADD_NOTE action", () => {
    const newDate = new Date();
    const newState = {
      title: "tile 1",
      description: "description 1",
      date: newDate,
      key: Date.now(),
    };
    expect(
      noteReducer(initialState, {
        type: ADD_NOTE,
        payload: newState,
      })
    ).toEqual({
      ...initialState,
      notes: [...initialState.notes, newState],
    });
  });
});
