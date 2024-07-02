"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import TaskTable from "./TaskTable";
import TaskFilter from "./TaskFilter";
import Loading from "./Loading";

export default function Form() {
  const [allTasks, setAllTasks] = useState([]);
  const [task, setTask] = useState({
    id: 1,
    description: "",
    priority: "",
    completed: false,
  });
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTasks = localStorage.getItem("allTasks");
      setAllTasks(storedTasks ? JSON.parse(storedTasks) : []);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!loading && typeof window !== "undefined") {
      localStorage.setItem("allTasks", JSON.stringify(allTasks));
    }
  }, [allTasks, loading]);

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

  const uncompleteTask = (id) => {
    setAllTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: false } : task
      )
    );
  };

  const deleteTask = (id) => {
    setAllTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const filterTasks = (filter, tasks) => {
    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    } else if (filter === "pending") {
      return tasks.filter((task) => !task.completed);
    } else {
      return tasks;
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTasks = filterTasks(filter, allTasks);

  if (loading) {
    return <Loading />;
  }

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
      <TaskFilter handleFilterChange={handleFilterChange} />
      <TaskTable
        tasks={filteredTasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
        uncompleteTask={uncompleteTask}
      />
    </div>
  );
}
