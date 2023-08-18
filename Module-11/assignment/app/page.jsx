import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full px-6 mx-auto text-center text-white">
      <p className="mt-12 text-2xl">
        Hi 👋,&nbsp;
        <span className="whitespace-nowrap block text-3xl">
          I am <span className="font-bold text-amber-600">Ash</span>
        </span>
        <span className="whitespace-nowrap block">Front-end Developer</span>
      </p>
      <p className="mt-12">
        You can read my blogs here 👉{" "}
        <Link href="/blog" className="font-bold hover:text-green-300">
          Blog
        </Link>
      </p>
    </main>
  );
}
