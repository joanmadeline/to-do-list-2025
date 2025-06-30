// import { useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import AddTask from "./AddTask";
import TaskCard from "./TaskCard";
// import { TASK_KEY } from "../utils/constants/localStorageConstants";
// import { useLocalStorage } from "../hooks/useLocalStorage";
import useTaskStore from "../store/useTaskStore";
// import useTaskStore from "../store/useTaskStore";

// interface TaskProps {
//   id: string;
//   task: string;
//   isCompleted: boolean;
// }

const TaskList = () => {
  const { tasks, addTask, deleteTask, markComplete } = useTaskStore();
  // // const [tasks, setTasks] = useState<TaskProps[]>([]);
  // const tasks = useTaskStore((state) => state.tasks);
  // const filter = useTaskStore((state) => state.filter);
  // const addTask = useTaskStore((state) => state.addTask);
  // const markComplete = useTaskStore((state) => state.markComplete);
  // const deleteTask = useTaskStore((state) => state.deleteTask);
  // const filteredTasks = tasks.filter((task) => {
  //   if (filter === "active") return !task.isComplete;
  //   if (filter === "completed") return task.isComplete;
  //   return true;
  // });

  // const [tasks, setTasks] = useLocalStorage<TaskProps[]>(TASK_KEY, []);

  // const addTasks = (item: string) => {
  //   const exists = tasks.some(
  //     (task) => task.task.toLowerCase() === item.toLowerCase()
  //   );

  //   if (exists) {
  //     alert("Task already exist!");
  //   } else {
  //     setTasks([
  //       ...tasks,
  //       {
  //         id: uuidv4(),
  //         task: item,
  //         isCompleted: false,
  //       },
  //     ]);
  //   }
  // };

  // const deleteTask = (idToRemove: string) => {
  //   setTasks((updatedTasks) => updatedTasks.filter((t) => t.id !== idToRemove));
  //   console.log([tasks]);
  // };

  // const markComplete = (id: string) => {
  //   setTasks((updatedTasks) =>
  //     updatedTasks.map((t) =>
  //       t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
  //     )
  //   );
  // };

  return (
    <div>
      <AddTask addTaskName={addTask} />
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          name={task.text}
          isCompleted={task.isComplete}
          markComplete={() => markComplete(task.id)}
          removeTask={() => deleteTask(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
