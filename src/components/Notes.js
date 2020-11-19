import React from "react";
import { Card } from "react-bootstrap";
import NoteTile from "./NoteTile";

function Notes({ notes, onEditClick, onNoteDelete }) {
  return (
    <Card className="notes-wrapper">
      <h3>Notes</h3>
      {notes && notes.length ? (
        notes.map((n, index) => (
          <NoteTile
            note={n}
            key={index}
            id={index + 1}
            onEditClick={onEditClick}
            onNoteDelete={onNoteDelete}
          />
        ))
      ) : (
        <div style={{ textAlign: "center" }}>
          <h4>No Notes</h4>
          <h5>Create your first Note</h5>
        </div>
      )}
    </Card>
  );
}

export default Notes;
