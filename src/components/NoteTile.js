import React from "react";
import { Button, Toast, Row, Col, Card } from "react-bootstrap";

function NoteTile(props) {
  function onEditClick() {
    props.onEditClick(props.note.key);
  }

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
            <Button onClick={onEditClick}>Edit</Button>
          </Col>
        </Row>
      </Toast.Body>
    </Toast>
  );
}

export default NoteTile;
