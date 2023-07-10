import { useState } from "react";

const Content = () => {
  const [text, setText] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
    setClicked(false);
  };

  const handleClick = () => {
    if (text !== "") {
      setClicked(true);
    }
  };

  return (
    <main className="my-4 w-11/12 sm:w-5/6 md:w-2/3 mx-auto">
      <textarea
        value={text}
        onChange={handleChange}
        className="block shadow-[inset_-12px_-8px_40px_#46464620] mx-1 p-2 w-full text-sm bg-gray-50 rounded-lg border border-gray-300"
        placeholder="Write your thoughts here..."
        rows={4}
      />
      <button
        onClick={handleClick}
        className="rounded mx-1 my-2 w-full py-1 bg-green-500 text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition ease-out duration-300"
      >
        Submit
      </button>
      {clicked && (
        <p className="w-full rounded-md mx-1 text-sm border p-2 italic shadow bg-blue-50">
          {text}
        </p>
      )}
    </main>
  );
};

export default Content;
