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
      className={`flex cursor-pointer items-center justify-center border-t-2 border-ligh-gray transition-all duration-150 ${style.navItems} ${currentPage === id ? style.navitemsActive : ""}`}
      onClick={() => {
        setCurrentPage(id);
      }}
    >
      <div className={`flex items-center justify-center ${style.navIconDiv} `}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className="NavIcon transition-all duration-500"
        >
          <path d={svgPath}></path>
        </svg>
      </div>
      <div
        className={`transition-all duration-150 ${navIsOpen ? "NavItemsText" : "closeItems"}`}
      >
        <p
          className={`text-base font-semibold text-principal-color transition-all duration-150 ${style.textItems} ${navIsOpen ? "textItems" : "hidden"}`}
        >
          {name}
        </p>
      </div>
    </li>
  );
};

export default ItemsNav;
