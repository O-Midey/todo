import React from "react";

export const FormField = ({ addTasks }) => {
  const [value, setValue] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) {
      addTasks(value);
      setValue("");
    }
  };

  return (
    <div>
      <h1>Just Do It!</h1>
      <div className="input-task">
        <form className="task-input" onSubmit={handleSubmit}>
          <input
            value={value}
            type="text"
            className="task-input"
            placeholder="what would you like to do?"
            onChange={(event) => setValue(event.target.value)}
          ></input>
          <button type="submit" className="add-task">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};
