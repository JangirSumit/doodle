import React from "react";
import { Button, Toast, Row, Col, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteNote, showUpdateNote } from "../actions";

function NoteTile(props) {
  return (
    <Toast className="note" onClose={() => props.deleteNote(props.note.key)}>
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
            <Button onClick={() => props.showUpdateNote(props.note.key)}>
              Edit
            </Button>
          </Col>
        </Row>
      </Toast.Body>
    </Toast>
  );
}

const mapStateToProps = (state, ownProps) => {
  return ownProps;
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (tileKey) => dispatch(deleteNote(tileKey)),
    showUpdateNote: (tileKey) => dispatch(showUpdateNote(tileKey)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteTile);
