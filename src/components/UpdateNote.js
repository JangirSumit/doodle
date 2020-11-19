import React from "react";
import { Button, Card, Form } from "react-bootstrap";

function UpdateNote(props) {
  function onUpdateClick() {}
  function onUpdateDiscardClick() {
    props.onUpdateDiscardClick(false);
  }

  return (
    <Card className={"update-note-wrapper"}>
      <h3>{`Update Note (${props.date})`}</h3>
      <Form>
        <Form.Group controlId="formUpdateTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            value={props.note && props.note.title}
          />
        </Form.Group>
        <Form.Group controlId="formUpdateDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Description"
            value={props.note && props.note.description}
          />
        </Form.Group>
      </Form>
      <p>
        <Button variant="primary" onClick={onUpdateClick}>
          Update
        </Button>{" "}
        <Button variant="secondary" onClick={onUpdateDiscardClick}>
          Discard
        </Button>
      </p>
    </Card>
  );
}

export default UpdateNote;
