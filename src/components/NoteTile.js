import React from "react";
import { Button, Toast, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteNote, showUpdateNote } from "../actions";

function NoteTile(props) {
  const dispatch = useDispatch();

  return (
    <Toast
      className="note"
      onClose={() => dispatch(deleteNote(props.note.key))}
    >
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
          <Col xs={9} style={{ paddingRight: "5px" }}>
            <small>{props.note.description}</small>
          </Col>
          <Col xs={3} style={{ paddingLeft: "5px", textAlign: "right" }}>
            <Button onClick={() => dispatch(showUpdateNote(props.note.key))}>
              Edit
            </Button>
          </Col>
        </Row>
      </Toast.Body>
    </Toast>
  );
}

export default NoteTile;
