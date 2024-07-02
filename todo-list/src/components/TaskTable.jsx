import React from "react";
import TasksCard from "./TasksCard";

export default function TaskTable({
  tasks,
  completeTask,
  deleteTask,
  uncompleteTask,
}) {
  return (
    <>
      {tasks.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center">
          <h3>No hay tareas que mostrar</h3>
        </div>
      ) : (
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <table className="table text-white mb-0 w-100">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th className="w-100" scope="col">
                    Tarea
                  </th>
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
      )}
    </>
  );
}
