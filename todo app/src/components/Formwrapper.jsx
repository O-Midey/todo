import React from "react";
import { FormField } from "./FormField";
import { Tasks } from "./Tasks";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export const Formwrapper = () => {
  const [tasks, setTasks] = React.useState([
    {
      id: uuidv4(),
      taskName: "default",
      completed: true,
      isEditing: false,
    },
  ]);

  const addTasks = (task) => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        taskName: task,
        completed: false,
        isEditing: false,
      },
    ]);
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) => {
        task.id === id ? { ...tasks, completed: !task.completed } : tasks;
      })
    );
    console.log(id);
  };

  return (
    <div className="form-wrapper">
      <FormField addTasks={addTasks} />
      {tasks.map((task, index) => {
        return (
          <Tasks
            id={task.id}
            toggleCompleted={toggleCompleted}
            completed={task.completed}
            taskName={task.taskName}
            key={index}
          />
        );
      })}
    </div>
  );
};
