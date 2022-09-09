import { motion } from "framer-motion";

const NoteCard = ({ note, setNotes, notes }) => {
  const deleteNote = () => {
    setNotes(notes.filter((each) => each.id !== note.id));
    localStorage.setItem(
      "notes",
      JSON.stringify(notes.filter((each) => each.id !== note.id))
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
      style={{ background: note.background }}
      className="card"
      key={note.id}
    >
      <h1>{note.title}</h1>
      <h4>{note.content}</h4>
      <div className="card-footer">
        <button onClick={deleteNote}>Delete</button>
        <p>{note.date}</p>
      </div>
    </motion.div>
  );
};

export default NoteCard;
