import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Login",
    link: "/login",
  },
  {
    name: "Dashboard",
    link: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-black p-4 sticky top-0 drop-shadow-xl text-white">
      <ul className="flex flex-row p-4 rounded-lg space-x-8 md:border-0">
        {navLinks.map(({ name, link }) => (
          <li key={name}>
            <Link href={link} className="relative group">
              {name}
              <span className="h-[1px] w-0 bg-[tomato] absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] duration-300">
                &nbsp;
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
