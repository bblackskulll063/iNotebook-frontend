import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const Addnote = () => {

  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setnote] = useState({ title: "", description: "", tag: "" });
  const [isexpanded, setexpanded] = useState(false);

  const handleOnClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setnote({ title: "", description: "", tag: "" })
    setexpanded(false);
  };

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  function expand() {
    setexpanded(true);
  }
  function compress() {
    setexpanded(false);
  }

  return (
    <div className="container addnote-page">
      {/* <h1 className="text-center">Add your Notes</h1> */}
      <div className="conatiner ">
        <form>
          <div >
            <input
              type="text"
              id="title"
              name="title"
              value={note.title}
              onChange={onChange}
              placeholder=" Title"
              onClick={expand}
            />
          </div>
          <div >
            {isexpanded && <input
              type="text"
              id="tag"
              name="tag"
              value={note.tag}
              onChange={onChange}
              placeholder=" Tag"
            />}
          </div>
          <div >
            {isexpanded && <textarea
              type="text"
              id="description"
              name="description"
              value={note.description}
              onChange={onChange}
              placeholder=" Description ..."
            />}
          </div>

          <Zoom in={isexpanded}>
            <Fab disabled={note.title.length < 5 || note.description.length < 5} onClick={handleOnClick} aria-label="add">
              <AddIcon onClick={compress} />
            </Fab>
          </Zoom>
        </form>
      </div>
    </div>
  );
};

export default Addnote;
