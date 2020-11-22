import React from "react";
import { connect } from "react-redux";
import { addNote } from "../actions";
import { Button, Card, Form } from "react-bootstrap";

function AddNote(props) {
  function onAddClick() {
    if (!document.getElementById("formAddTitle").value.trim()) {
      alert("Please Enter Valid Title");
      return false;
    }

    props.addNote({
      title: document.getElementById("formAddTitle").value.trim(),
      description: document.getElementById("formAddDescription").value.trim(),
      date: props.date,
      key: Date.now(),
    });
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

const mapStateToProps = (state) => {
  return {
    date: state.note.date,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (data) => dispatch(addNote(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);
