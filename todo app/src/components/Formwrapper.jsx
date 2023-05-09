import React from "react";
import { FormField } from "./FormField";
import { Tasks } from "./Tasks";
import { v4 as uuidv4 } from "uuid";
import { EditFormField } from "./EditFormField";
uuidv4();

export const Formwrapper = () => {
  const [tasks, setTasks] = React.useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

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
        return task.id === id ? { ...task, completed: !task.completed } : task;
      })
    );
  };

  const toggleEditing = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, isEditing: !task.completed } : task;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const editTask = (taskName, id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, taskName: taskName, isEditing: !task.isEditing }
          : task
      )
    );
  };

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="form-wrapper">
      <h1>Just Do It!</h1>
      <FormField addTasks={addTasks} />
      {tasks.map((task, index) => {
        return task.isEditing ? (
          <EditFormField
            key={index}
            taskName={task.taskName}
            editTask={editTask}
            id={task.id}
          />
        ) : (
          <Tasks
            taskName={task.taskName}
            key={index}
            completed={task.completed}
            id={task.id}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
            toggleEditing={toggleEditing}
          />
        );
      })}
    </div>
  );
};
