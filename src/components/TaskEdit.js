import { useState } from "react";

function TaskEdit({ task, onSubmit }) {
  const [taskName, setTaskName] = useState(task.taskName);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task.id, taskName);
  };

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <div className="task-edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor=""></label>
        <input className="input" onChange={handleChange} value={taskName} />
        <button className="button">Save</button>
      </form>
    </div>
  );
}

export default TaskEdit;
