import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'

interface TaskCardProps {
  name: string;
}

const TaskCard = ({ name }: TaskCardProps) => {
  return (
    <div className="bg-white mt-5 flex items-center justify-between rounded-lg px-3 py-2">
      <div className="flex items-center">
        <input type="checkbox" className="rounded-full mr-2" />
        <p>{name}</p>
      </div>
      <div className="flex items-center">
        <button className="bg-gray-100 py-1 px-2 rounded-md mr-1">
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button className="bg-gray-100 py-1 px-2 rounded-md">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
