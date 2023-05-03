import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Tasks = (props) => {
  return (
    <div
      className={props.completed ? "task-wrapper completed" : "task-wrapper "}
    >
      <p className="task-name" onClick={() => props.toggleCompleted(props.id)}>
        {props.taskName}
      </p>
      <div className="icons">
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => props.deleteTask(props.id)}
        />
      </div>
    </div>
  );
};
