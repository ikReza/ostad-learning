import Todo from "./Todo";

const TodosList = ({ todoList, setTodoList }) => {
  const handleDel = (itemID) => {
    setTodoList(todoList.filter((el) => el.id !== itemID));
  };

  const handleComplete = (itemID) => {
    setTodoList(
      todoList.map((el) =>
        el.id === itemID ? { ...el, completed: !el.completed } : el
      )
    );
  };

  return (
    <ul className="h-[50vh] overflow-y-auto">
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleDel={handleDel}
          handleComplete={handleComplete}
        />
      ))}
    </ul>
  );
};

export default TodosList;
