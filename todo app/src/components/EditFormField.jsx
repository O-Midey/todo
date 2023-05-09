import React from "react";

export const EditFormField = (props) => {
  const [value, setValue] = React.useState(props.taskName);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) {
      props.editTask(value, props.id);
      console.log(props.id);
    }
  };

  return (
    <div>
      <div className="input-task">
        <form className="task-input" onSubmit={handleSubmit}>
          <input
            value={value}
            type="text"
            className="task-input"
            placeholder="Update task"
            onChange={(event) => setValue(event.target.value)}
          ></input>
          <button type="submit" className="add-task">
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
};
