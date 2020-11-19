import React from "react";
import { Button, Card, Form } from "react-bootstrap";

function AddNote(props) {
  function onAddClick() {
    props.onAddClick({
      title: document.getElementById("formAddTitle").value,
      description: document.getElementById("formAddDescription").value,
      date: props.date,
      key: Date.now(),
    });
  }

  function onAddDiscardClick() {
    document.getElementById("formAddTitle").value = "";
    document.getElementById("formAddDescription").value = "";
  }

  return (
    <Card className={"add-note-wrapper"}>
      <h3>{`Add Note (${props.date})`}</h3>
      <Form>
        <Form.Group controlId="formAddTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" />
        </Form.Group>
        <Form.Group controlId="formAddDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Description" />
        </Form.Group>
      </Form>
      <p>
        <Button variant="primary" onClick={onAddClick}>
          Add
        </Button>{" "}
        <Button variant="secondary" onClick={onAddDiscardClick}>
          Discard
        </Button>
      </p>
    </Card>
  );
}

export default AddNote;
