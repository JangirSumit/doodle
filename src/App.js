import React from "react";
import { useSelector } from "react-redux";
import Calendar from "./components/Calendar";
import AddNote from "./components/AddNote";
import UpdateNote from "./components/UpdateNote";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Notes from "./components/Notes";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const showUpdateNote = useSelector((state) => state.note.showUpdateNote);

  return (
    <>
      <header>Doodle</header>
      <div className="App">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Calendar />
            </Col>
            <Col xs={12} md={6}>
              <Notes />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <AddNote />
            </Col>
            <Col xs={12} md={6}>
              {showUpdateNote && <UpdateNote />}
            </Col>
          </Row>
        </Container>
      </div>
      <footer>
        Copyright &copy; 2020 by Sumit Jangir. All Rights Reserved.
      </footer>
    </>
  );
}

export default App;
