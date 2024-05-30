"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col lg:flex-row gap-4 lg:gap-8">
      {links.map((link, index) => {
        const isActive = pathname === link.path;
        return (
          <Link href={link.path} key={index}>
            <span
              className={`text-white-500 hover:text-accent ${
                isActive ? "text-yellow-500 underline" : ""
              }`}
            >
              {link.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
