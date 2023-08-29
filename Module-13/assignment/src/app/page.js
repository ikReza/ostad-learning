"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    const response = await fetch("/api/profile", {
      method: "POST",
    });

    const data = await response.json();
    setMessage(data.cookie.value);
  };

  return (
    <main className="m-4">
      <h2 className="text-lg font-semibold text-center my-4">Home Page</h2>
      <button
        onClick={handleClick}
        className="bg-cyan-200 hover:bg-cyan-300 p-2 rounded"
      >
        Set Cookie
      </button>
      <p className="my-2">
        User Preference:{" "}
        {message ? (
          <i className="bg-black text-white px-2">{message}</i>
        ) : (
          <i>light</i>
        )}
      </p>
    </main>
  );
}
