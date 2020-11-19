import React from "react";
import { Button, Card, Form } from "react-bootstrap";

function AddUpdateNote(props) {
  function onAddClick() {
    props.onAddClick({
      title: document.getElementById("formTitle").value,
      description: document.getElementById("formDescription").value,
      date: props.date,
      key: Date.now(),
    });
  }
  function onAddDiscardClick() {}
  function onUpdateClick() {}
  function onUpdateDiscardClick() {}

  return (
    <Card
      className={props.isCreate ? "add-note-wrapper" : "update-note-wrapper"}
    >
      <h3>{props.isCreate ? "Add Note" : `Update Note (${props.date})`}</h3>
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            value={props.note && props.note.title}
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Description" />
        </Form.Group>
      </Form>
      {props.isCreate ? (
        <p>
          <Button variant="primary" onClick={onAddClick}>
            Add
          </Button>{" "}
          <Button variant="secondary" onClick={onAddDiscardClick}>
            Discard
          </Button>
        </p>
      ) : (
        <p>
          <Button variant="primary" onClick={onUpdateClick}>
            Update
          </Button>{" "}
          <Button variant="secondary" onClick={onUpdateDiscardClick}>
            Discard
          </Button>
        </p>
      )}
    </Card>
  );
}

export default AddUpdateNote;
