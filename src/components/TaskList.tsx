import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTask from "./AddTask";
import TaskCard from "./TaskCard";

interface TaskProps {
  id: string;
  task: string;
  isComplete: boolean;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const addTasks = (item: string) => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        task: item,
        isComplete: false,
      },
    ]);
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div>
      <AddTask addTaskName={addTasks} />
      {tasks.map((task) => (
        <TaskCard key={task.id} name={task.task} />
      ))}
    </div>
  );
};

export default TaskList;
