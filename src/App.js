import React, { useState } from "react";
import Calendar from "./components/Calendar";
import AddUpdateNote from "./components/AddUpdateNote";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Notes from "./components/Notes";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const [date, setDate] = useState(formatDate(new Date()));
  const [notes, setNotes] = useState(localStorage.getItem("notes"));
  const [showAddNote, setShowAddNote] = useState(true);
  const [showUpdateNote, setShowUpdateNote] = useState(false);

  function onDateClick(date) {
    setDate(formatDate(date));
  }

  function onAdd(params) {}

  function formatDate(date) {
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  return (
    <>
      <header>Doodle</header>
      <div className="App">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Calendar onDateClick={onDateClick} />
            </Col>
            <Col xs={12} md={6}>
              <Notes notes={notes} />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              {showAddNote && <AddUpdateNote isCreate={true} date={date} />}
            </Col>
            <Col xs={12} md={6}>
              {showUpdateNote && <AddUpdateNote date={date} />}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
