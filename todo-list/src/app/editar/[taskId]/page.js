// src/app/editar/[taskId]/page.jsx
"use client";

import React, { useContext, useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import TasksContext from "@/context/TaskContext";

export default function EditTaskPage() {
  const params = useParams();
  const taskId = params.taskId;
  const router = useRouter();
  const { allTasks, updateTask } = useContext(TasksContext);

  const [task, setTask] = useState({
    id: "",
    description: "",
    priority: "",
    completed: false,
  });

  useEffect(() => {
    if (taskId && allTasks.length > 0) {
      const taskToEdit = allTasks.find((task) => task.id === parseInt(taskId));
      if (taskToEdit) {
        setTask(taskToEdit);
      }
    }
  }, [taskId, allTasks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(task);
    router.push("/");
  };

  return (
    <div className="container h-screen pt-5">
      <div className="py-3">
        <Link href="/">
          <button type="button" class="btn btn-secondary">
            Regresar
          </button>
        </Link>
      </div>
      <h3>Editar Tarea {taskId}</h3>
      <form
        className="container d-flex justify-content-center align-items-center pt-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Escriba una nueva tarea..."
          required
          className="form-control w-50 mx-3"
        />
        <div className="d-flex gap-2">
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            className="form-select"
            aria-label="Default select example"
          >
            <option value="">Prioridad</option>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
          </select>
          <button
            type="submit"
            title="Actualizar"
            className="btn btn-icon btn-info"
          >
            <Image
              src="/assets/update.svg"
              alt="Update"
              type="button"
              width={30}
              height={30}
              className=""
            />
          </button>
        </div>
      </form>
    </div>
  );
}
