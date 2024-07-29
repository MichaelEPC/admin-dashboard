"use client";

import Link from "next/link";
import style from "./style.module.css";

interface ControlProps {
  id: number;
  name: string;
  svgPath: string;
  currentPage: number;
  setCurrentPage: (num: number) => void;
  navIsOpen: boolean;
}

const ItemsNav = ({
  id,
  name,
  svgPath,
  currentPage,
  setCurrentPage,
  navIsOpen,
}: ControlProps) => {
  return (
    <li
      className={`relative flex cursor-pointer items-center justify-center border-t-2 border-ligh-gray ${style.navItems} ${currentPage == id ? "navitemsActive" : ""}`}
      onClick={() => {
        setCurrentPage(id);
      }}
    >
      <div
        className={`flex items-center justify-center ${style.NavIconDiv} absolute left-8 top-4`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className="NavIcon transition-all duration-300"
        >
          <path d={svgPath}></path>
        </svg>
      </div>
      <div
        className={`transition-all duration-150 ${navIsOpen ? "NavItemsText" : "closeItems"}`}
      >
        <div
          className={`textNavItems text-base font-semibold text-principal-color transition-all duration-150 ${navIsOpen ? "NavItemsText" : "hidden"}`}
        >
          {name}
        </div>
      </div>
    </li>
  );
};

export default ItemsNav;
