import Header from "./Header";

import TaskList from "./TaskList";

const ToDoList = () => {
  return (
    <div className="max-w-screen">
      <Header title="To Do List" />
      <div className="p-12 bg-gray-100 rounded-md">
        <TaskList />
      </div>
    </div>
  );
};

export default ToDoList;
