"use client";

import React from "react";
import NameUser from "./_Components/NameUser";
import SlideDown from "./_Components/SlideDown";

const HeaderContainer = () => {
  const [openSlide, setOpenSlide] = React.useState(false);
  return (
    <>
      <header className="fixed z-40 flex h-16 w-full items-center justify-between border-2 border-ligh-gray bg-white pl-8 pr-10">
        <div className="rounded-lg bg-principal-color p-2">
          <p className="cursor-default text-lg font-semibold text-white">
            Your DashBoard
          </p>
        </div>

        <div
          className="flex h-full cursor-pointer items-center justify-around"
          onClick={() => setOpenSlide(!openSlide)}
        >
          <svg
            className="h-10 fill-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"></path>
            <path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"></path>
          </svg>
          <NameUser />
        </div>
      </header>
      <SlideDown isSlideOpen={openSlide} />
    </>
  );
};

export default HeaderContainer;
