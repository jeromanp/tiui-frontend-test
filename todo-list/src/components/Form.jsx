"use client";
import React, { useState } from "react";
import Image from "next/image";
import TaskTable from "./TaskTable";
import TaskFilter from "./TaskFilter";

export default function Form() {
  const [allTasks, setAllTasks] = useState([]);
  const [task, setTask] = useState({
    id: 1,
    description: "",
    priority: "",
    completed: false,
  });

  console.log(allTasks);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.description.trim() === "" || task.priority === "") {
      return;
    }

    const newTask = {
      ...task,
      id: allTasks.length + 1,
    };

    setAllTasks((prevTasks) => [...prevTasks, newTask]);

    setTask({
      id: allTasks.length + 2,
      description: "",
      priority: "",
      completed: false,
    });
  };

  const handleClear = () => {
    setTask({
      id: allTasks.length + 1,
      description: "",
      priority: "",
      completed: false,
    });
  };

  const completeTask = (id) => {
    setAllTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  const deleteTask = (id) => {
    setAllTasks((prevTasks) => 
      prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <form
        className="container d-flex justify-content-center align-items-center"
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
          <button type="submit" className="btn btn-light btn-sm">
            <Image
              src="/assets/add.svg"
              alt="Add"
              type="button"
              width={30}
              height={30}
              className=""
            />
          </button>
          <button
            type="button"
            className="btn btn-light btn-sm"
            onClick={handleClear}
          >
            <Image
              src="/assets/clean.svg"
              alt="Clear"
              type="button"
              width={30}
              height={30}
              className=""
            />
          </button>
        </div>
      </form>
      <TaskFilter tasks={allTasks} />
      <TaskTable tasks={allTasks} completeTask={completeTask} deleteTask={deleteTask} />
    </div>
  );
}
