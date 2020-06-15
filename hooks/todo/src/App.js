import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

export default function App() {
  const [task, setTask] = useState("");
  const [addedTasks, setAddedTasks] = useState([]);
  const [editFlag, setEditFlag] = useState(false);
  const [editTarget, setEditTarget] = useState(null)
  const handleIndividualTask = (e) => {
    if (e.keyCode === 13 && e.target.value.length !== 0) {
      handleAddTask();
    }
  };
  const handleAddTask = () => {
    if(!editFlag && task.length!=0 ){
      setAddedTasks([
        ...addedTasks,
        { taskId: uuidv4(), taskName: task, status: false },
      ]);
      setTask("");
    }
    else{
      let tasksCopy= [...addedTasks]
      for(let i of tasksCopy){
        if(i.taskId===editTarget){
          i.taskName=task
          console.log("Edit done successfully")
          break
        }
        
      }
      setAddedTasks(tasksCopy)
      setEditFlag(false)
      setEditTarget(null)
    }
  };
  const manageTask = (e) => {
    let unique = e.target.parentElement.getAttribute("unique");
    let relatedTo = e.target.getAttribute("related");
    let tasksCopy = [...addedTasks];
    if (unique) {
      for (let i of tasksCopy) {
        if (i.taskId === unique && relatedTo === "status") {
          i.status = !i.status;
          console.log("task status changed successfully");
          break
        } else if (i.taskId === unique && relatedTo === "remove") {
          tasksCopy = tasksCopy.filter((e) => e.taskId !== unique);
          console.log("task removed successfully");
          break
        } else if(i.taskId === unique && relatedTo === "edit") {
          setEditFlag(true)
          setTask(i.taskName)
          setEditTarget(i.taskId)
          break
        }
      }
      setAddedTasks(tasksCopy)
      ;
    }
  };
  return (
    <div className="col-3 mx-auto">
      <p className="text-center">
      <input
        id="inputTask"
        value={task}
        onKeyDown={handleIndividualTask}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="btn-primary" onClick={handleAddTask}>{editFlag ? "Edit" : "Add"}</button>
      </p>
      <div className="mx-auto" >
        {addedTasks &&
          addedTasks.map((e) =>
            e.status ? (
              <div key={uuidv4()} unique={e.taskId} className="d-flex">
                <p onClick={manageTask} unique={e.taskId}>
                  <span
                    related="edit"
                    className="iconify cursor"
                    data-icon="ic:outline-edit"
                    data-inline="false"
                  ></span>
                </p>
                <del
                  className="text-center cursor text-truncate"
                  related="status"
                  onClick={manageTask}
                >
                  <span className="mx-auto">{e.taskName}</span>
                </del>
                <p onClick={manageTask}>
                  <span
                    related="remove"
                    className="iconify cursor"
                    data-icon="clarity:remove-line"
                    data-inline="false"
                  />
                </p>
              </div>
            ) : (
              <div key={uuidv4()} unique={e.taskId} className="d-flex">
                <p onClick={manageTask} unique={e.taskId}>
                  <span
                    related="edit"
                    className="iconify cursor"
                    data-icon="ic:outline-edit"
                    data-inline="false"
                  ></span>
                </p>
                <p
                  className="col text-center cursor text-truncate mx-auto"
                  related="status"
                  onClick={manageTask}
                >
                 <span className="mx-auto">{e.taskName}</span>
                </p>
                <p onClick={manageTask} unique={e.taskId}>
                  <span
                    related="remove"
                    className="iconify cursor"
                    data-icon="clarity:remove-line"
                    data-inline="false"
                  />
                </p>
              </div>
            )
          )}
      </div>
    </div>
  );
}
