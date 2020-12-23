import { CHANGE_DATE } from "../constants";
import { dateReducer } from "./dateReducer";

describe("date reducer", () => {
  it("should return null while calling date reducer with null state and blank action", () => {
    const result = dateReducer(null, "");

    expect(result).toEqual(null);
  });

  it("should return initial state while calling date reducer with initial state and blank action", () => {
    const initialState = new Date();
    const result = dateReducer(initialState, "");

    expect(result).toEqual(initialState);
  });

  it("should return new state while calling date reducer with new state and change date action", () => {
    const initialState = new Date();
    const newDate = new Date();
    const result = dateReducer(initialState, {
      type: CHANGE_DATE,
      payload: newDate,
    });

    expect(result).toEqual(newDate);
  });
});
