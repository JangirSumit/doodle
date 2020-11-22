import { combineReducers } from "redux";
import { dateReducer } from "./dateReducer";
import { noteReducer } from "./noteReducer";

export const reducer = combineReducers({
  date: dateReducer,
  note: noteReducer,
});
