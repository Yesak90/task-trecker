import { useState, useEffect } from "react";
import axios from "axios";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await axios.get("http://127.0.0.1:3004/tasks");
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (taskName) => {
    const response = await axios.post("http://127.0.0.1:3004/tasks", {
      taskName,
    });
    const updatedTasks = [...tasks, response.data];
    setTasks(updatedTasks);
  };

  const editTaskById = async (id, newTaskName) => {
    const response = await axios.put(`http://127.0.0.1:3004/tasks/${id}`, {
      taskName: newTaskName,
    });

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, ...response.data };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTaskById = async (id) => {
    await axios.delete(`http://127.0.0.1:3004/tasks/${id}`);
    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(updatedTasks);
  };
  return (
    <div className="app">
      <TaskList tasks={tasks} onEdit={editTaskById} onDelete={deleteTaskById} />
      <TaskCreate onCreate={addTask} />
    </div>
  );
}

export default App;
