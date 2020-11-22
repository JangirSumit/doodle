import {
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  SET_DATE,
  SHOW_UPDATE_NOTE,
} from "../constants";
import { formatDate } from "../common";

const initialState = {
  date: formatDate(new Date()),
  notes: [],
  showUpdateNote: false,
  editTile: {},
};

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        date: formatDate(action.payload),
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };

    case DELETE_NOTE:
      return {
        ...state,
        showUpdateNote: false,
        notes: state.notes.filter((n) => n.key !== action.payload),
      };
    case SHOW_UPDATE_NOTE:
      return {
        ...state,
        showUpdateNote: !!action.payload,
        editTile: action.payload && {
          ...state.notes.filter((n) => n.key === action.payload)[0],
        },
      };
    case UPDATE_NOTE:
      const newNotes = state.notes.map((note) => {
        if (note.key === action.payload.key) {
          note.description = action.payload.description;
          note.title = action.payload.title;
          return { ...note };
        }
        return note;
      });

      return {
        ...state,
        showUpdateNote: false,
        notes: [...newNotes],
      };
    default:
      return state;
  }
};
