import React from "react";
import TasksCard from "./TasksCard";

const taskList = {
  tasks: [
    { num: 1, task: "Tarea de ejemplo 1", priority: "alta" },
    { num: 2, task: "Tarea de ejemplo 2", priority: "media" },
    { num: 3, task: "Tarea de ejemplo 3", priority: "baja" },
    { num: 4, task: "Tarea de ejemplo 4", priority: "media" },
    { num: 5, task: "Tarea de ejemplo 5", priority: "alta" },
  ],
};

export default function TaskTable() {
  return (
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <table className="table text-white mb-0">
          <thead>
            <tr>
              <th scope="col">Número</th>
              <th scope="col">Tarea</th>
              <th scope="col">Prioridad</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {taskList.tasks.map((task, index) => (
              <TasksCard
                key={index}
                num={task.num}
                task={task.task}
                priority={task.priority}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
