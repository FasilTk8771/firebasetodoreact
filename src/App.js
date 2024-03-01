import React, { useState, useEffect } from "react";
import Todo from "./components/Todo";
import Updatemodal from "./components/updatemodal";
import { db } from "./firebase.js";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";

import "./App.css";

const q = query(collection(db, "tasks"), orderBy("timestamp", "desc", "task"));

function App() {
  const [todos, setTodos] = useState([]);
  const [taskinput, setTaskInput] = useState("");
  const [descinput, setDescInput] = useState("");
  const [updateTodo, setUpdateTodo] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    addDoc(collection(db, "tasks"), {
      task: taskinput,
      desc: descinput,
      timestamp: serverTimestamp(),
    });

    setTaskInput("");
    setDescInput("");
  };

  return (
    <div className="App">
      <h2> TODO</h2>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add task"
          value={taskinput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="Write description"
          value={descinput}
          onChange={(e) => setDescInput(e.target.value)}
        />
        <button type="submit">Add task</button>
      </form>
      <ul>
        {todos.map((item) => (
          <Todo key={item.id} arr={item} updateid={setUpdateTodo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
