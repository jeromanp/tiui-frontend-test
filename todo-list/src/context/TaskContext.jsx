"use client";
import React, { createContext, useState, useEffect } from "react";

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [allTasks, setAllTasks] = useState([]);
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

  const updateTask = (updatedTask) => {
    setAllTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  return (
    <TasksContext.Provider value={{ allTasks, setAllTasks, updateTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
