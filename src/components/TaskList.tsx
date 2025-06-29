import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTask from "./AddTask";
import TaskCard from "./TaskCard";
import { TASK_KEY } from "../utils/constants/localStorageConstants";

interface TaskProps {
  id: string;
  task: string;
  isCompleted: boolean;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  const addTasks = (item: string) => {
    const exists = tasks.some(
      (task) => task.task.toLowerCase() === item.toLowerCase()
    );

    if (exists) {
      alert("Task already exist!");
    } else {
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          task: item,
          isCompleted: false,
        },
      ]);
    }
  };

  //load from local storage
  useEffect(() => {
    const storedTasks = localStorage.getItem(TASK_KEY);
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
    setHasLoaded(true);
  }, []);

  //save to local storage
  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
    }
  }, [tasks, hasLoaded]);

  const deleteTask = (idToRemove: string) => {
    setTasks((updatedTasks) => updatedTasks.filter((t) => t.id !== idToRemove));
    console.log([tasks]);
  };

  const markComplete = (id: string) => {
    setTasks((updatedTasks) =>
      updatedTasks.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  return (
    <div>
      <AddTask addTaskName={addTasks} />
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          name={task.task}
          isCompleted={task.isCompleted}
          markComplete={() => markComplete(task.id)}
          removeTask={() => deleteTask(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
