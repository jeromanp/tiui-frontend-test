import React from "react";
import TasksCard from "./TasksCard";

const taskList = {
  tasks: [
    { id: 1, task: "Tarea de ejemplo 1", priority: "alta", completed: false },
    { id: 2, task: "Tarea de ejemplo 2", priority: "media", completed: false },
    { id: 3, task: "Tarea de ejemplo 3", priority: "baja", completed: false },
    { id: 4, task: "Tarea de ejemplo 4", priority: "media", completed: false },
    { id: 5, task: "Tarea de ejemplo 5", priority: "alta", completed: false },
  ],
};

export default function TaskTable({ tasks, completeTask, deleteTask }) {
  return (
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <table className="table text-white mb-0">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tarea</th>
              <th scope="col">Prioridad</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TasksCard
                key={task.id}
                {...task}
                completeTask={completeTask}
                deleteTask={deleteTask}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
