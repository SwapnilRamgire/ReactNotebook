import { useState } from "react";
import { motion } from "framer-motion";

const AddTaskModal = ({ setModalOpen, notes, setNotes }) => {
  const [bgColor, setBgColor] = useState("rgb(235, 235, 235)");
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const setTitleHandler = (e) => {
    setNoteTitle(e.target.value);
  };
  const setContentHandler = (e) => {
    setNoteContent(e.target.value);
  };
  const addTaskToList = () => {
    if (noteTitle && noteContent) {
      setNotes([
        {
          title: noteTitle,
          content: noteContent,
          id: Math.random(),
          date: new Date().toLocaleString(),
          background: bgColor,
        },
        ...notes,
      ]);
      localStorage.setItem(
        "notes",
        JSON.stringify([
          {
            title: noteTitle,
            content: noteContent,
            id: Math.random(),
            date: new Date().toLocaleString(),
            background: bgColor,
          },
          ...notes,
        ])
      );
    }
    setModalOpen(false);
  };
  return (
    <motion.div
      transition={{ duration: 1, type: "spring" }}
      initial={{ top: -100, opacity: 0 }}
      animate={{ top: 0, opacity: 1 }}
      exit={{ top: -100, opacity: 0 }}
      className="addTaskModal"
    >
      <div className="modal-cont">
        <input
          onChange={setTitleHandler}
          type="text"
          placeholder="Topic Title"
        />
        <textarea onChange={setContentHandler} placeholder="Notes" />
        <div className="btn-cont">
          <div className="color-btn-cont">
            <button
              className={`${
                bgColor === "rgb(235, 235, 235)"
                  ? "color-btn active"
                  : "color-btn"
              }`}
              style={{ background: "rgb(235, 235, 235)" }}
              onClick={() => setBgColor("rgb(235, 235, 235)")}
            ></button>
            <button
              className={`${
                bgColor === "rgb(187, 228, 255)"
                  ? "color-btn active"
                  : "color-btn"
              }`}
              style={{ background: "rgb(187, 228, 255)" }}
              onClick={() => setBgColor("rgb(187, 228, 255)")}
            ></button>
            <button
              className={`${
                bgColor === "rgb(255, 187, 252)"
                  ? "color-btn active"
                  : "color-btn"
              }`}
              style={{ background: "rgb(255, 187, 252)" }}
              onClick={() => setBgColor("rgb(255, 187, 252)")}
            ></button>
            <button
              className={`${
                bgColor === "rgb(255, 239, 187)"
                  ? "color-btn active"
                  : "color-btn"
              }`}
              style={{ background: "rgb(255, 239, 187)" }}
              onClick={() => setBgColor("rgb(255, 239, 187)")}
            ></button>
            <button
              className={`${
                bgColor === "rgb(255, 187, 187)"
                  ? "color-btn active"
                  : "color-btn"
              }`}
              style={{ background: "rgb(255, 187, 187)" }}
              onClick={() => setBgColor("rgb(255, 187, 187)")}
            ></button>
          </div>
          <button onClick={addTaskToList} className="addTaskBtn">
            Add Note
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AddTaskModal;
