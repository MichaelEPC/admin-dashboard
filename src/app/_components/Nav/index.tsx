"use client";

import React, { useEffect } from "react";
import ItemsNav from "./ItemsNav";
import { usePathname } from "next/navigation";
import style from "./style.module.css";

const navItems = [
  {
    id: 1,
    name: "Home",
    svgPath:
      "M12.74 2.32a1 1 0 0 0-1.48 0l-9 10A1 1 0 0 0 3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1 1 1 0 0 0-.26-.68z",
  },
  {
    id: 2,
    name: "Team",
    svgPath:
      "M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z",
  },
  {
    id: 3,
    name: "Operations",
    svgPath:
      "M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v4h5v-2h2v2h6v-2h2v2h5V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 11h-2v-2H9v2H7v-2H2v6c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-6h-5v2z",
  },
  {
    id: 4,
    name: "Agenda",
    svgPath:
      "M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H18.8zM8 11h12v2H8zm0 5h12v2H8z",
  },
];

const Nav = () => {
  const [navIsOpen, setNavIsOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const path = usePathname();

  useEffect(() => {
    switch (path) {
      case "/home":
        setCurrentPage(1);
        break;

      case "/team":
        setCurrentPage(2);
        break;

      case "/operations":
        setCurrentPage(3);
        break;

      case "/agenda":
        setCurrentPage(4);
        break;

      default:
        setCurrentPage(1);
        break;
    }
  }, []);

  return (
    <nav
      className={`fixed z-30 bg-white shadow-md transition-all duration-150 ${navIsOpen ? style.navContainerExpanded : style.navContainer}`}
    >
      <ul className={`flex-col sm:flex ${navIsOpen ? "block" : "hidden"}`}>
        {navItems.map((navItem) => {
          return (
            <ItemsNav
              key={navItem.id}
              id={navItem.id}
              name={navItem.name}
              svgPath={navItem.svgPath}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              navIsOpen={navIsOpen}
            />
          );
        })}
      </ul>
      <div
        className="absolute -right-10 top-80 cursor-pointer sm:-right-6"
        onClick={() => {
          if (navIsOpen) {
            setNavIsOpen(false);
          } else {
            setNavIsOpen(true);
          }
        }}
      >
        <svg
          className="ml-1 h-10 fill-principal-color"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 15v-4H7v-2h5V7l5 5-5 5z"></path>
        </svg>
      </div>
    </nav>
  );
};

export default Nav;
