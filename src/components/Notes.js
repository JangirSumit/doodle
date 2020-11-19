import React from "react";
import { Button, Toast, Row, Col, Card } from "react-bootstrap";

function NoteTitle(props) {
  return (
    <Toast className="note">
      <Toast.Header>
        <strong className="mr-auto">
          {props.id}. {props.note.title}
        </strong>
        <small>
          <div>{props.note.date}</div>
        </small>
      </Toast.Header>
      <Toast.Body>
        <Row>
          <Col xs={9}>
            <small>{props.note.description}</small>
          </Col>
          <Col xs={3}>
            <Button>Edit</Button>
          </Col>
        </Row>
      </Toast.Body>
    </Toast>
  );
}

function Notes({ notes }) {
  return (
    <Card className="notes-wrapper">
      <h3>Notes</h3>
      {notes && notes.length ? (
        notes.map((n, index) => (
          <NoteTitle note={n} key={index} id={index + 1} />
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
