// import React from "react";
import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { TASK_KEY } from "../utils/constants/localStorageConstants";
import { createJSONStorage, persist } from "zustand/middleware";
// import { isFetchableDevEnvironment } from "vite";
// import TaskList from "../components/TaskList";

type Task = {
  id: string;
  text: string;
  isComplete: boolean;
};

type Filter = "all" | "active" | "completed";

type TaskStore = {
  tasks: Task[];
  filter: Filter;
  addTask: (text: string) => void;
  markComplete: (id: string) => void;
  deleteTask: (id: string) => void;
  setFilter: (filter: Filter) => void;
};

const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: localStorage.getItem(TASK_KEY)
        ? JSON.parse(localStorage.getItem(TASK_KEY)!)
        : [],

      filter: "all",

      addTask: (text) =>
        set((state) => ({
          tasks: [...state.tasks, { id: uuidv4(), text, isComplete: false }],
        })),

      markComplete: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, isComplete: !task.isComplete } : task
          ),
        })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      setFilter: (filter) => set(() => ({ filter })),
    }),
    {
      name: TASK_KEY,
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useTaskStore;
