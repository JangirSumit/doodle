import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { updateNote, showUpdateNote } from "../actions";

function UpdateNote(props) {
  function onUpdateClick() {
    if (!document.getElementById("formUpdateTitle").value.trim()) {
      alert("Please Enter Valid Title");
    }

    props.updateNote({
      title: document.getElementById("formUpdateTitle").value.trim(),
      description: document
        .getElementById("formUpdateDescription")
        .value.trim(),
      date: props.note.date,
      key: props.note.key,
    });
    document.getElementById("formUpdateTitle").value = "";
    document.getElementById("formUpdateDescription").value = "";
  }

  return (
    <Card className={"update-note-wrapper"}>
      <h3>{`Update Note (${props.note.date})`}</h3>
      <Form>
        <Form.Group controlId="formUpdateTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            defaultValue={props.note && props.note.title}
          />
        </Form.Group>
        <Form.Group controlId="formUpdateDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Description"
            defaultValue={
              props.note && props.note.description.substring(0, 100)
            }
          />
        </Form.Group>
      </Form>
      <p>
        <Button variant="primary" onClick={onUpdateClick}>
          Update
        </Button>{" "}
        <Button variant="secondary" onClick={showUpdateNote}>
          Discard
        </Button>
      </p>
    </Card>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    note: state.note.editTile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNote: (data) => dispatch(updateNote(data)),
    showUpdateNote: () => dispatch(showUpdateNote()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateNote);
