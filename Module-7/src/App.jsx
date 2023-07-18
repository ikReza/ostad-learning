import Form from "./components/Form";
import TodosList from "./components/TodosList";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="bg-gray-500 w-full h-screen flex items-center">
      <div className="border w-[500px] mx-auto p-5 text-center">
        <h1 className="text-3xl font-bold">ToDo List</h1>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todoList={todoList}
          setTodoList={setTodoList}
        />

        <TodosList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
}

export default App;
