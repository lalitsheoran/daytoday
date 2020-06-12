import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

export default function App() {
  const [task, setTask] = useState(null);
  const [addedTasks, setAddedTasks] = useState([]);

  const handleIndividualTask = e => {
    if (e.keyCode === 13 && e.target.value.length !== 0) {
      handleAddTask();
    }
  };
  const handleAddTask = () => {
    setAddedTasks([
      ...addedTasks,
      { taskId: uuidv4(), taskName: task, status: false }
    ]);
    let inputTask = document.getElementById("inputTask");
    inputTask.value = null;
  };
  const manageTask = e => {
    let unique = e.target.getAttribute("unique");
    let tasksCopy = [...addedTasks];
    if (unique) {
      console.log(unique, tasksCopy);
      for (let i = 0; i < tasksCopy.length; i++) {
        if (tasksCopy[i].taskId === unique) {
          tasksCopy[i].status = !tasksCopy[i].status;
          console.log("found and changes done");
        }
      }
      setAddedTasks(tasksCopy);
    }
    
  };
  return (
    <div>
      <input
        id="inputTask"
        onKeyDown={handleIndividualTask}
        onChange={e => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
      <div>
        {addedTasks &&
          addedTasks.map(e =>
              <div
                key={uuidv4()}
                className={e.status ? "text-success" : "text-danger"}
                unique={e.taskId}
                onClick={manageTask}
              >
                {e.taskName}
              </div>
          )}
      </div>
      <button>Show Completed Tasks</button>
    </div>
  );
}
