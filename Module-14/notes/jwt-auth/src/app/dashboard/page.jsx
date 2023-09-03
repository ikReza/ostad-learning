"use client";

import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  const handleClick = async () => {
    const res = await fetch("/api/login", { method: "GET" });
    const data = await res.json();

    if (data.status === true) {
      router.replace("/");
    }
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold my-8">Dashboard Page</h2>
      <button
        onClick={handleClick}
        className="bg-cyan-400 hover:bg-teal-400 p-2 rounded font-semibold"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
