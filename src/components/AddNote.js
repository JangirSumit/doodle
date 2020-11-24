import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../actions";
import { Button, Card, Form } from "react-bootstrap";

function AddNote() {
  const date = useSelector((state) => state.note.date);
  const dispatch = useDispatch();

  function onAddClick() {
    if (!document.getElementById("formAddTitle").value.trim()) {
      alert("Please Enter Valid Title");
      return false;
    }

    dispatch(
      addNote({
        title: document.getElementById("formAddTitle").value.trim(),
        description: document.getElementById("formAddDescription").value.trim(),
        date: date,
        key: Date.now(),
      })
    );
    clear();
  }

  function onAddDiscardClick() {
    clear();
  }

  function clear() {
    document.getElementById("formAddTitle").value = "";
    document.getElementById("formAddDescription").value = "";
  }

  return (
    <Card className={"add-note-wrapper"}>
      <h3>{`Add Note (${date})`}</h3>
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
