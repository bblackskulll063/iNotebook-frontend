import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItems from "./noteItems";
import Addnote from "./Addnote";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote} = context;
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }
    else{
      navigate('/login')
    }
    // eslint-disable-next-line 
  }, []);

  const [note, setnote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

  const ref = useRef(null);
  const refclose = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setnote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
  };

  const handleOnClick = (e) => {
      editNote(note.id, note.etitle, note.edescription, note.etag);
      refclose.current.click();
  };

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <Addnote />

      {/* this is a modal form updating a note  */}
      <button
        style={{ display: "none" }}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Edit Note
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog " >
          <div className="modal-content" style={{ borderRadius:"20px" }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">

              {/* here is editing a note form  */}
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    onChange={onChange}
                    value={note.edescription}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    onChange={onChange}
                    value={note.etag}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refclose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button disabled={note.etitle.length < 5 || note.edescription.length<5 } type="button" className="btn btn-primary" onClick={handleOnClick}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
        {notes.length?notes.map((note) => {
          return (
            <NoteItems key={note._id} updateNote={updateNote} note={note} />
          );
        }) : <h5>[There is no notes here]</h5>}
      </div>
    </div>
  );
};
export default Notes;
