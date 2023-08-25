import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Navlink = ({ setOpen }) => {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col border border-gray-100 p-4 rounded-lg md:flex-row md:space-x-8 md:border-0">
      {navLinks.map(({ name, link }) => (
        <li key={name}>
          <Link
            href={link}
            className={`${
              pathname === link ? "bg-blue-300" : ""
            } block py-2 rounded hover:bg-gray-50 px-3 md:p-1 md:hover:bg-transparent md:border-0 md:hover:text-blue-700`}
            onClick={() => setOpen(false)}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navlink;
