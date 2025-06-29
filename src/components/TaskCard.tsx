import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import type { FormEvent } from "react";
// import type { FormEvent } from "react";
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'

interface TaskCardProps {
  id: string;
  name: string;
  removeTask: (id: string) => void;
  isCompleted: boolean;
  markComplete: (id: string) => void;
}

const TaskCard = ({
  id,
  name,
  removeTask,
  isCompleted,
  markComplete,
}: TaskCardProps) => {
  const handleComplete = (e: FormEvent) => {
    e.preventDefault();
    markComplete(id);
  };

  return (
    <div
      //   key={id}
      className="bg-white mt-5 flex items-center justify-between rounded-lg px-3 py-2"
    >
      <div className="flex items-center">
        {/* <input
          type="checkbox"
          onChange={handleComplete}
          checked={isCompleted}
          className="rounded-full mr-2"
        /> */}
        <p className={`capitalize ${isCompleted ? "line-through" : ""}`}>
          {name}
        </p>
      </div>
      <div className="flex items-center">
        {/* <button className="bg-gray-100 py-1 px-2 rounded-md mr-1">
          <FontAwesomeIcon icon={faPen} />
        </button> */}
        <button
          onClick={handleComplete}
          className={`${
            isCompleted ? "checked" : ""
          } py-1 px-2 rounded-sm mr-1`}
        >
          {isCompleted ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faCheck} />
          )}
          {/* <FontAwesomeIcon icon={faCheck} /> */}
        </button>
        <button
          onClick={() => removeTask(id)}
          className="bg-gray-100 py-1 px-2 rounded-md"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
