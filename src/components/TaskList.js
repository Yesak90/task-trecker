import TaskShow from "./TaskShow";

function TaskList({ tasks, onEdit, onDelete }) {
  const renderedTasks = tasks.map((task) => (
    <TaskShow key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
  ));
  return <div className="task-list">{renderedTasks}</div>;
}
export default TaskList;
