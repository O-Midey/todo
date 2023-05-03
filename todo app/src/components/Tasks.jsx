import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Tasks = (props) => {
  return (
    <div
      onClick={() => props.toggleCompleted(props.id)}
      className={props.completed ? "task-wrapper completed" : "task-wrapper "}
    >
      <p className="task-name">{props.taskName}</p>
      <div className="icons">
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};
