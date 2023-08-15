import Link from "next/link";
// import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl">
      <Link href="/" className="text-white/90 hover:text-white">
        About Me
      </Link>
    </nav>
  );
};

export default Navbar;
