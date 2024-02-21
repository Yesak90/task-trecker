import { useState } from "react";

function TaskCreate({ onCreate }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(taskName);
    setTaskName("");
  };

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <div className="task-create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Task Name</label>
        <input className="input" onChange={handleChange} value={taskName} />
        <button className="button">Add Task</button>
      </form>
    </div>
  );
}

export default TaskCreate;
