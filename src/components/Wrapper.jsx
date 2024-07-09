import TodoForm from "./TodoForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import Edit from "./Edit";
uuidv4();

const Wrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };
  const toggleComplete = (id) => {
    console.log("Clicked");
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    console.log(todos);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (value, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isEditing: !todo.isEditing, task: value }
          : todo
      )
    );
  };
  return (
    <div className="TodoWrapper">
      <h1>Get things done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <Edit key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={index}
            task={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default Wrapper;
