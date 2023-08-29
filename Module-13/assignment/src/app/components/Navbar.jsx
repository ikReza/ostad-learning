import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Redirect",
    link: "/redirect",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-[whitesmoke] p-4 sticky top-0 drop-shadow-xl">
      <ul className="flex flex-col border border-gray-100 p-4 rounded-lg md:flex-row md:space-x-8 md:border-0">
        {navLinks.map(({ name, link }) => (
          <li key={name}>
            <Link href={link} className="relative group">
              {name}
              <span className="h-[1px] w-0 bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] duration-300">
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
