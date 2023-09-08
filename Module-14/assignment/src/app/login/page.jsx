"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Login = () => {
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    username: "",
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
      console.log(data);
      toast.success(data.message);
      router.replace("/dashboard");
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div className="w-2/3 md:w-2/5 mx-auto">
      <h2 className="text-center text-2xl font-bold my-8 text-[tomato]">
        Login Page
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-[#233] text-[tomato] p-4 rounded-lg shadow-lg hover:shadow-gray-600 z-10"
        autoComplete="off"
      >
        <label htmlFor="username">
          Name <sup>*</sup>
        </label>
        <input
          type="text"
          placeholder="Your Name"
          value={formValues.username}
          required
          onChange={(e) => handleChange("username", e.target.value)}
          className="block bg-transparent border rounded-lg w-full p-2 my-2 placeholder:italic placeholder-[#555]"
        />
        <label htmlFor="email">
          Email <sup>*</sup>
        </label>
        <input
          type="email"
          placeholder="Email"
          value={formValues.email}
          required
          onChange={(e) => handleChange("email", e.target.value)}
          className="block bg-transparent border rounded-lg w-full p-2 my-4 placeholder:italic placeholder-[#555]"
        />
        <label htmlFor="password">
          Password <sup>*</sup>
        </label>
        <input
          type="password"
          placeholder="Password"
          value={formValues.password}
          required
          onChange={(e) => handleChange("password", e.target.value)}
          className="block bg-transparent border rounded-lg w-full p-2 my-2 placeholder:italic placeholder-[#555]"
        />
        <button
          type="submit"
          className="bg-[tomato] text-[#233] p-2 rounded-lg w-full my-4 font-semibold hover:shadow-md disabled:opacity-50"
          disabled={
            !formValues.username || !formValues.email || !formValues.password
          }
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
