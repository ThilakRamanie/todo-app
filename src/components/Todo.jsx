import { GrEdit } from "react-icons/gr";
import { FaTrash } from "react-icons/fa";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <GrEdit
          onClick={() => editTodo(task.id)}
          style={{ cursor: "pointer" }}
        />
        <FaTrash
          onClick={() => deleteTodo(task.id)}
          style={{ cursor: "pointer", marginLeft: "0.75rem" }}
        />
      </div>
    </div>
  );
};

export default Todo;
