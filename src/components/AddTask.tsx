import { useState, type FormEvent } from "react";

interface AddTaskProps {
  addTaskName: (task: string) => void;
}

const AddTask = ({ addTaskName }: AddTaskProps) => {
  const [taskName, setTaskName] = useState("");

  const handleChange = (value: string) => {
    setTaskName(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (taskName === "") {
      alert("Task is empty!");
    } else {
      addTaskName(taskName);
      setTaskName("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task_name"
          placeholder="Add your task"
          value={taskName}
          onChange={(e) => handleChange(e.target.value)}
          className="rounded-l-full bg-white px-6 py-1"
        />
        <input
          type="submit"
          value="Add"
          className="bg-red-800 text-white rounded-r-full px-6 py-1"
        />
      </form>
    </div>
  );
};

export default AddTask;
