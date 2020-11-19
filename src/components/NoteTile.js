import React from "react";
import { Button, Toast, Row, Col, Card } from "react-bootstrap";

function NoteTile(props) {
  return (
    <Toast className="note" onClose={() => props.onNoteDelete(props.note.key)}>
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
            <Button onClick={() => props.onEditClick(props.note.key)}>
              Edit
            </Button>
          </Col>
        </Row>
      </Toast.Body>
    </Toast>
  );
}

export default NoteTile;
