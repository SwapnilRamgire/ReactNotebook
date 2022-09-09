import { useEffect, useState } from "react";

import Header from "./components/Header";
import AddTaskModal from "./components/AddTaskModal";

import "./styles/app.css";
import Notes from "./components/Notes";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getSetLocalNotes();
  }, []);

  const getSetLocalNotes = () => {
    let check = localStorage.getItem("notes");
    if (check) {
      setNotes(JSON.parse(check));
    } else {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  };

  return (
    <div className="App">
      <Header isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      {isModalOpen && (
        <AddTaskModal
          setModalOpen={setModalOpen}
          notes={notes}
          setNotes={setNotes}
        />
      )}
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
};

export default App;
