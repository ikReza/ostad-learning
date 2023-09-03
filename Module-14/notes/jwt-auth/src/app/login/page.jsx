"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Login = () => {
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (key, value) => {
    setFormValues({ ...formValues, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = { method: "POST", body: JSON.stringify(formValues) };
    const response = await fetch("/api/login", config);
    const data = await response.json();

    if (data.status === true) {
      toast.success(data.message);
      router.replace("/dashboard");
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div className="px-4">
      <h2 className="text-center text-2xl font-bold my-8">Login Page</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center border shadow-lg bg-amber-100 p-2"
        autocomplete="off"
      >
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => handleChange("email", e.target.value)}
          className="bg-slate-200 p-2 rounded w-2/3"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => handleChange("password", e.target.value)}
          className="bg-slate-200 p-2 rounded my-4 w-2/3"
        />
        <button
          type="submit"
          className="bg-cyan-400 hover:bg-teal-400 p-2 rounded font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
