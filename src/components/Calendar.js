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
    <ReactCalendar
      onClickDay={onDateClick}
      onChange={onChange}
      value={value}
      defaultValue={[new Date("11/17/2020"), new Date("11/18/2020")]}
    />
  );
}

export default Calendar;
