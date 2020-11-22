import React, { useState } from "react";
import { connect } from "react-redux";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { changeDate, setDate } from "../actions";

function Calendar(props) {
  function onDateClick(date) {
    props.onDateClick(date);
  }

  return (
    <ReactCalendar
      onClickDay={(date) => props.setDate(date)}
      onChange={(nextValue) => props.changeDate(nextValue)}
      value={props.value}
    />
  );
}

const mapStateToProps = (state) => {
  return { value: state.date.value };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeDate: (nextValue) => dispatch(changeDate(nextValue)),
    setDate: (date) => dispatch(setDate(date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
