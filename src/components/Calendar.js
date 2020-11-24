import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { changeDate, setDate } from "../actions";

function Calendar() {
  const value = useSelector((state) => state.date.value);
  const dispatch = useDispatch();

  return (
    <ReactCalendar
      onClickDay={(date) => dispatch(setDate(date))}
      onChange={(nextValue) => dispatch(changeDate(nextValue))}
      value={value}
    />
  );
}

export default Calendar;
