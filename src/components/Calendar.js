import React, { useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calendar(props) {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  function onDateClick(date) {
    props.onDateClick(date);
  }

  return (
    <ReactCalendar onClickDay={onDateClick} onChange={onChange} value={value} />
  );
}

export default Calendar;
