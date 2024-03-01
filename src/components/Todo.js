import React, { useState } from "react";
import { db } from "../firebase.js";
import { doc, deleteDoc } from "firebase/firestore";
import BasicModal from "./updatemodal.jsx";

const Todo = ({ arr }) => {
  const [open, setOpen] = React.useState(false);
  const [updatedata, setUpdatedata] = useState({ item: { task: '', desc: '' } });

  const handleModal = () => setOpen(!open);

  return (
    <>
      {open && <BasicModal open={open} handleModal={handleModal} arr={updatedata} />}
      <div className="todo__list">
        <div>
          <p>{arr.item.task}</p>
          <p>{arr.item.desc}</p>
          <button
            onClick={() => {
              setUpdatedata(arr);
              handleModal();
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              deleteDoc(doc(db, "tasks", arr.id));
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
