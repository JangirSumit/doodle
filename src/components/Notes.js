import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Card, ButtonGroup, Button, Row, Col } from "react-bootstrap";
import NoteTile from "./NoteTile";

function Notes(props) {
  const [showNotes, setshowNotes] = useState({
    active: 1,
    notes: props.notes,
  });

  useEffect(() => {
    switch (showNotes.active) {
      case 0:
        showPastNotes();
        break;
      case 1:
        showCurrentNotes();
        break;
      case 2:
        showFutureNotes();
        break;
      default:
        showCurrentNotes();
        break;
    }
  }, [props.notes]);

  function showCurrentNotes() {
    const today = new Date();
    setshowNotes({
      active: 1,
      notes: [
        ...props.notes.filter(
          (n) =>
            Date.parse(n.date) ===
            Date.parse(
              `${
                today.getMonth() + 1
              }/${today.getDate()}/${today.getFullYear()}`
            )
        ),
      ],
    });
  }

  function showPastNotes() {
    const today = new Date();
    setshowNotes({
      active: 0,
      notes: [
        ...props.notes.filter(
          (n) =>
            Date.parse(n.date) <
            Date.parse(
              `${
                today.getMonth() + 1
              }/${today.getDate()}/${today.getFullYear()}`
            )
        ),
      ],
    });
  }

  function showFutureNotes() {
    const today = new Date();
    setshowNotes({
      active: 2,
      notes: [
        ...props.notes.filter(
          (n) =>
            Date.parse(n.date) >
            Date.parse(
              `${
                today.getMonth() + 1
              }/${today.getDate()}/${today.getFullYear()}`
            )
        ),
      ],
    });
  }

  return (
    <Card className="notes-wrapper">
      <Row>
        <Col>
          <h3>Notes</h3>
        </Col>
        <Col style={{ textAlign: "right" }}>
          <ButtonGroup size="sm">
            <Button
              variant="success"
              onClick={showPastNotes}
              active={showNotes.active === 0}
            >
              Past
            </Button>
            <Button
              variant="success"
              onClick={showCurrentNotes}
              active={showNotes.active === 1}
            >
              Current
            </Button>
            <Button
              variant="success"
              onClick={showFutureNotes}
              active={showNotes.active === 2}
            >
              Future
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      {showNotes.notes && showNotes.notes.length ? (
        showNotes.notes.map((n, index) => (
          <NoteTile note={n} key={index} id={index + 1} />
        ))
      ) : (
        <div style={{ textAlign: "center" }}>
          <h4>No Notes</h4>
          <h5>Create your first Note</h5>
        </div>
      )}
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    notes: state.note.notes,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     showCurrentNotes: () => dispatch(showCurrentNotes()),
//     showPastNotes: () => dispatch(showPastNotes()),
//     showFutureNotes: () => dispatch(showFutureNotes()),
//   };
// };

export default connect(mapStateToProps)(Notes);
