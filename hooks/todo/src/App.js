import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

export default function App() {
  const [task, setTask] = useState(null);
  const [addedTasks, setAddedTasks] = useState([]);

  const handleIndividualTask = (e) => {
    if (e.keyCode === 13 && e.target.value.length !== 0) {
      handleAddTask();
    }
  };
  const handleAddTask = () => {
    setAddedTasks([
      ...addedTasks,
      { taskId: uuidv4(), taskName: task, status: false },
    ]);
    let inputTask = document.getElementById("inputTask");
    inputTask.value = null;
  };
  const manageTask = (e) => {
    let unique = e.target.parentElement.getAttribute("unique");
    let relatedTo = e.target.getAttribute("related");
    console.log(relatedTo, unique);
    let tasksCopy = [...addedTasks];
    if (unique) {
      console.log(unique, tasksCopy);
      for (let i = 0; i < tasksCopy.length; i++) {
        if (tasksCopy[i].taskId === unique && relatedTo === "status") {
          tasksCopy[i].status = !tasksCopy[i].status;
          console.log("found and changes done");
        } else if (tasksCopy[i].taskId === unique && relatedTo === "remove") {
          tasksCopy = tasksCopy.filter((e) => e.taskId !== unique);
        }
      }
      setAddedTasks(tasksCopy);
    }
  };
  const iconAlert=()=>{
    alert("clicked")
  }
  return (
    <div>
      <input
        id="inputTask"
        onKeyDown={handleIndividualTask}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
      <div>
        {addedTasks &&
          addedTasks.map((e) =>
            e.status ? (
              <div key={uuidv4()} unique={e.taskId} className="d-flex" >
                <p
                  className="col-2"
                  // className={e.status ? "text-success" : "text-danger"}
                  related="status"
                  onClick={manageTask}
                >
                  <del>{e.taskName}</del>
                </p>
                <span
                  related="remove"
                  onClick={iconAlert}
                  className="iconify border"
                  data-icon="clarity:remove-line"
                  data-inline="false"
                ></span>
              </div>
            ) : (
              <div key={uuidv4()} unique={e.taskId} className="d-flex">
                <p
                  className="col-2"
                  // className={e.status ? "text-success" : "text-danger"}

                  related="status"
                  onClick={manageTask}
                >
                  {e.taskName}
                </p>
                <span
                  related="remove"
                  onClick={iconAlert}
                  className="iconify border"
                  data-icon="clarity:remove-line"
                  data-inline="false"
                ></span>
              </div>
            )
          )}
      </div>
    </div>
  );
}
