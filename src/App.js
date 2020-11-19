import React, { useState } from "react";
import Calendar from "./components/Calendar";
import AddNote from "./components/AddNote";
import UpdateNote from "./components/UpdateNote";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Notes from "./components/Notes";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const [date, setDate] = useState(formatDate(new Date()));
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")));
  const [showAddNote, setShowAddNote] = useState(true);
  const [showUpdateNote, setShowUpdateNote] = useState(false);
  const [editTile, setEditTile] = useState({});

  function onDateClick(date) {
    setDate(formatDate(date));
  }

  function onAddClick(data) {
    let notes = localStorage.getItem("notes");
    let newNotes = [];
    if (notes && notes.length) {
      localStorage.removeItem("notes");
    }

    if (!notes) {
      newNotes = [data];
    } else {
      notes = JSON.parse(notes);
      newNotes = [...notes, data];
    }

    localStorage.setItem("notes", JSON.stringify(newNotes));
    setNotes(newNotes);
  }

  function onEditClick(tileKey) {
    const selectedTile = notes.filter((n) => n.key === tileKey)[0];
    setEditTile(selectedTile);
    setShowUpdateNote(true);
  }

  function onUpdateDiscardClick(flag) {
    setShowUpdateNote(flag);
  }

  function onNoteDelete(tileKey) {
    setShowUpdateNote(false);
    const remainingNotes = notes.filter((n) => n.key !== tileKey);
    localStorage.setItem("notes", JSON.stringify(remainingNotes));
    setNotes(remainingNotes);
  }

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
              <Notes
                notes={notes}
                onEditClick={onEditClick}
                onNoteDelete={onNoteDelete}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              {showAddNote && <AddNote date={date} onAddClick={onAddClick} />}
            </Col>
            <Col xs={12} md={6}>
              {showUpdateNote && (
                <UpdateNote
                  date={date}
                  note={editTile}
                  onUpdateDiscardClick={onUpdateDiscardClick}
                />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
