import NoteCard from "./NoteCard";
import { motion } from "framer-motion";

const Notes = ({ notes, setNotes }) => {
  return (
    <motion.div layout="position" className="notes-cont">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} setNotes={setNotes} notes={notes} />
      ))}
    </motion.div>
  );
};

export default Notes;
