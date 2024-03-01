import { useState } from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.js";

const BasicModal = ({ open, handleModal, arr }) => {
    const [task, setTask] = useState(arr.item.task);
    const [desc, setDesc] = useState(arr.item.desc);

    const handleUpdate = (e) => {
        e.preventDefault();
        const docRef = doc(db, "tasks", arr.id);
        updateDoc(docRef, {
            task: task,
            desc: desc,
        });
        handleModal();
    };

    return (
        <div>
            {open && (
                <div className="modal" style={{ display: "block" }}>
                    <div className="modal-content">
                        <input
                            type="text"
                            placeholder="Add task"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Write description"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        <button onClick={handleUpdate}>Update</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BasicModal;
