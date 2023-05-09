import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
export const Tasks = (props) => {
  return (
    <motion.div
      animate={{ scale: 1.05 }}
      className={props.completed ? "task-wrapper completed" : "task-wrapper "}
    >
      <p className="task-name" onClick={() => props.toggleCompleted(props.id)}>
        {props.taskName}
      </p>
      <div className="icons">
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => props.toggleEditing(props.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => props.deleteTask(props.id)}
        />
      </div>
    </motion.div>
  );
};
