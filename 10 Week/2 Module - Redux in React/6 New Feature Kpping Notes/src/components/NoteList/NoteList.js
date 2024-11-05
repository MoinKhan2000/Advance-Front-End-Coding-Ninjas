import { useDispatch, useSelector } from "react-redux";
import "./NoteList.css";
import { deleteNote } from "../../redux/actions/noteActions";


function NoteList() {

  // Get notes from Redux store
  const notes = useSelector((state) => state.notes.notes);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <ul>
        {notes && notes.length > 0 && notes.map((note, index) => (
          <li key={index}>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger" onClick={() => (dispatch(deleteNote(index)))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
