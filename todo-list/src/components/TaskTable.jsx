import React from "react";
import TasksCard from "./TasksCard";

export default function TaskTable({ tasks, completeTask, deleteTask, uncompleteTask }) {
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
                uncompleteTask={uncompleteTask}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
