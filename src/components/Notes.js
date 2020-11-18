import React from "react";

function Note(props) {
  return (
    <div className="note">
      <div>
        {props.id}. {props.title}
      </div>
      <div>{props.date}</div>
      <button>Edit</button>
    </div>
  );
}

function Notes({ notes }) {
  return (
    <div className="notes-wrapper">
      {notes && notes.length ? (
        notes.map((n) => <Note note={n} />)
      ) : (
        <div style={{ textAlign: "center" }}>
          <h1>No Notes</h1>
          <h3>Create your first Note</h3>
        </div>
      )}
    </div>
  );
}

export default Notes;
