import React, {useContext} from "react";
import NoteContext from "../context/notes/NoteContext";

const NoteItems = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const {note, updateNote} = props;

  return (
    <div className="col col-md-4 my-3">
      <div className="card MY-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
            {note.description}
          </p>
          <div className="ficon">
          <i className="fa-solid fa-trash mx-3" onClick={() =>{deleteNote(note._id)}}></i>
          <i className="fa-solid fa-pen-to-square" onClick={() => {updateNote(note)}}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItems;
