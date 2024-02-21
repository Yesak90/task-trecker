import { useState } from "react";
import TaskEdit from "./TaskEdit";

function TaskShow({ task, onEdit, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleSubmit = (id, newTaskName) => {
    onEdit(id, newTaskName);
    setShowEdit(false);
  };

  const handleEditClick = (id, newTaskName) => {
    setShowEdit(!showEdit);
  };

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  let content = <h3>{task.taskName}</h3>;

  if (showEdit) {
    content = <TaskEdit task={task} onSubmit={handleSubmit} />;
  }

  return (
    <div className="task-show">
      <div>
        <img
          src={`https://picsum.photos/seed/${task.id}/300/200`}
          alt="task-photo"
        />
      </div>
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskShow;
