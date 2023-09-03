import Link from "next/link";

export default function Home() {
  return (
    <main className="px-8">
      <h2 className="text-center text-2xl font-bold my-8">
        JWT Authentication
      </h2>
      <Link
        href="/login"
        className="bg-cyan-400 hover:bg-teal-400 p-2 rounded font-semibold"
      >
        Login
      </Link>
      <br /> <br />
      <Link
        href="/dashboard"
        className="bg-green-300 hover:bg-lime-400 p-2 rounded font-semibold"
      >
        Dashboard
      </Link>
    </main>
  );
}
