import { useState } from "react";
import DeleteIcon from "../assets/delete.svg";
import DeleteRed from "../assets/deleteRed.svg";
import EditIcon from "../assets/edit.svg";

const Todo = ({ todo, handleDel, handleComplete }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className={`${
        todo.completed ? "bg-green-600" : "bg-[#FFC300]"
      } grid grid-cols-12 gap-2 items-center py-1 px-2 mb-2 `}
    >
      <input
        type="checkbox"
        className="col-span-1"
        checked={todo.completed}
        onChange={() => handleComplete(todo.id)}
      />
      <p
        className={`col-span-9 text-left ${
          todo.completed ? "line-through italic" : ""
        }`}
      >
        {todo.title}
      </p>
      <span className="col-span-1 cursor-pointer">
        <img src={EditIcon} className="h-6 w-auto" />
      </span>
      <span className="col-span-1 cursor-pointer">
        <img
          src={hovered ? DeleteRed : DeleteIcon}
          className="h-6 w-auto"
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
          onClick={() => handleDel(todo.id)}
        />
      </span>
    </li>
  );
};

export default Todo;
