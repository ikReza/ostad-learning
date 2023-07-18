import { useState } from "react";

const Form = ({ todoList, setTodoList, inputText, setInputText }) => {
  const handleForm = (e) => {
    e.preventDefault();

    setTodoList([
      ...todoList,
      { id: Date.now(), title: inputText, completed: false },
    ]);

    setInputText("");
  };

  return (
    <form onSubmit={handleForm}>
      <input
        type="text"
        placeholder="add new task"
        className="border-2 border-black p-2 w-full italic rounded-lg my-5"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-red-500 py-2 px-5 rounded-lg text-white mb-5"
      >
        Add ToDo
      </button>
    </form>
  );
};

export default Form;
